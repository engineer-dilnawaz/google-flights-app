import { useReducer } from "react";

type State = {
  emailOrPhone: string;
  password: string;
  showPassword: boolean;
  errors: {
    emailOrPhone?: string;
    password?: string;
  };
  loading: boolean;
  alertMessage: string;
};

type Action =
  | { type: "SET_EMAIL_OR_PHONE"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "TOGGLE_PASSWORD_VISIBILITY" }
  | { type: "SET_ERRORS"; payload: State["errors"] }
  | { type: "RESET_ERRORS" }
  | { type: "RESET_FORM" }
  | { type: "SET_LOADING" }
  | { type: "SET_MESSAGE"; payload: string };

const initialState: State = {
  emailOrPhone: "",
  password: "",
  showPassword: false,
  errors: {},
  loading: false,
  alertMessage: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
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

    case "SET_ERRORS":
      return { ...state, errors: action.payload };

    case "RESET_ERRORS":
      return { ...state, errors: {} };

    case "SET_LOADING":
      return { ...state, loading: !state.loading };

    case "SET_MESSAGE":
      return { ...state, alertMessage: action.payload };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

export const useLoginForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};
