import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  getUserFromStorage,
  removeUserFromStorage,
  saveUserToStorage,
  StoredUser,
} from "~/src/utils/authStorage";

type AuthContextType = {
  user: StoredUser | null;
  isLoggedIn: boolean;
  login: (user: Omit<StoredUser, "name">) => Promise<void | string>;
  signUp: (user: StoredUser) => Promise<void>;
  logout: () => Promise<void>;
  deleteAccount: () => Promise<void>;
  isLoading: boolean;
  handleSwitchStack: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  login: async () => {},
  logout: async () => {},
  deleteAccount: async () => {},
  isLoading: true,
  handleSwitchStack: () => {},
  signUp: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<StoredUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [switchStack, setSwitchStack] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await getUserFromStorage();
        setUser(storedUser);
        setIsLoggedIn(!!storedUser);
      } catch (error) {
        console.error("Error loading user:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadUser();
  }, [switchStack]);

  const login = async (user: Omit<StoredUser, "name">) => {
    const storedUser = await getUserFromStorage();
    if (storedUser) {
      if (
        user.emailOrPhone === storedUser.emailOrPhone &&
        user.password === storedUser.password
      ) {
        setUser(storedUser);
        setIsLoggedIn(true);
      }
    } else {
      return "Incorrect credentials";
    }
  };

  const signUp = async (user: StoredUser) => {
    try {
      const newUserObj = {
        name: user.name,
        emailOrPhone: user.emailOrPhone,
        password: user.password,
      };
      await saveUserToStorage(newUserObj);
      setUser(newUserObj);
      setIsLoggedIn(true);
    } catch (error) {}
  };

  const logout = async () => {
    setIsLoggedIn(false);
  };

  const deleteAccount = async () => {
    await removeUserFromStorage();
    setUser(null);
    setIsLoggedIn(false);
  };

  const handleSwitchStack = () => setSwitchStack((prev) => !prev);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        login,
        logout,
        deleteAccount,
        isLoading,
        handleSwitchStack,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
