import {
  AuthAction,
  AuthState,
  AuthActionTypes,
} from "../types/authStoreTypse";

const initialState: AuthState = {
  info: {
    token: "",
    key: "",
    email: "",  
    secret: "",
  },
  error: null,
};

export const authReducer = (
  state = initialState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.AUTH_SUCCESS:
      return {
        ...state,
        info: {
          token: action.payload.token,
          key: action.payload.key,
          email: action.payload.email,
          secret: action.payload.secret,
        },
        error: null,
      };
    case AuthActionTypes.AUTH_ERROR:
      return {
        ...state,
        info: { token: "", key: "", email: "", secret: "" },
        error: action.payload,
      };
    case AuthActionTypes.AUTH_REMOVE:
      return {
        ...state,
        info: { token: "", key: "", email: "", secret: "" },
        error: null,
      };
    default:
      return state;
  }
};
