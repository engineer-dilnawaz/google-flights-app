import { useReducer } from "react";

type State = {
  name: string;
  emailOrPhone: string;
  password: string;
  showPassword: boolean;
  termsAccepted: boolean;
  errors: {
    name?: string;
    emailOrPhone?: string;
    password?: string;
    termsAccepted?: string;
  };
  isLoading: boolean;
  showSnackbar: boolean;
  snackbarMessage: string;
};

type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL_OR_PHONE"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "TOGGLE_PASSWORD_VISIBILITY" }
  | { type: "TOGGLE_TERMS" }
  | { type: "SET_ERRORS"; payload: State["errors"] }
  | { type: "RESET_ERRORS" }
  | { type: "SET_LOADING" }
  | { type: "RESET_LOADING" }
  | { type: "RESET_FORM" }
  | { type: "SET_SNACK_BAR"; payload: string }
  | { type: "RESET_SNACK_BAR" };

const initialState: State = {
  name: "",
  emailOrPhone: "",
  password: "",
  showPassword: false,
  termsAccepted: false,
  errors: {},
  isLoading: false,
  showSnackbar: false,
  snackbarMessage: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_NAME": {
      const { name, ...restErrors } = state.errors;
      return {
        ...state,
        name: action.payload,
        errors: restErrors,
      };
    }

    case "SET_EMAIL_OR_PHONE": {
      const { emailOrPhone, ...restErrors } = state.errors;
      return {
        ...state,
        emailOrPhone: action.payload,
        errors: restErrors,
      };
    }

    case "SET_PASSWORD": {
      const { password, ...restErrors } = state.errors;
      return {
        ...state,
        password: action.payload,
        errors: restErrors,
      };
    }

    case "TOGGLE_PASSWORD_VISIBILITY":
      return { ...state, showPassword: !state.showPassword };

    case "TOGGLE_TERMS": {
      const { termsAccepted, ...restErrors } = state.errors;
      return {
        ...state,
        termsAccepted: !state.termsAccepted,
        errors: restErrors,
      };
    }

    case "SET_ERRORS":
      return { ...state, errors: action.payload };

    case "RESET_ERRORS":
      console.log("Resetting Error!");
      return { ...state, errors: {} };

    case "SET_LOADING":
      return { ...state, isLoading: true };

    case "RESET_LOADING":
      return { ...state, isLoading: false };

    case "RESET_FORM":
      return initialState;

    case "SET_SNACK_BAR":
      return { ...state, showSnackbar: true, snackbarMessage: action.payload };

    case "RESET_SNACK_BAR":
      return { ...state, showSnackbar: false, snackbarMessage: "" };

    default:
      return state;
  }
}

export const useSignUpForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};
