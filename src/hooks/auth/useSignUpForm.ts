import { useReducer } from "react";

type State = {
  name: string;
  emailOrPhone: string;
  password: string;
  showPassword: boolean;
  termsAccepted: boolean;
};

type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL_OR_PHONE"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "TOGGLE_PASSWORD_VISIBILITY" }
  | { type: "TOGGLE_TERMS" }
  | { type: "RESET" };

const initialState: State = {
  name: "",
  emailOrPhone: "",
  password: "",
  showPassword: false,
  termsAccepted: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL_OR_PHONE":
      return { ...state, emailOrPhone: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "TOGGLE_PASSWORD_VISIBILITY":
      return { ...state, showPassword: !state.showPassword };
    case "TOGGLE_TERMS":
      return { ...state, termsAccepted: !state.termsAccepted };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export const useSignUpForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};
