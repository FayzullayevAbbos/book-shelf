export enum AuthActionTypes {
  AUTH_SUCCESS = "AUTH_SUCCESS",
  AUTH_REMOVE = "AUTH_REMOVE",
  AUTH_ERROR = "AUTH_ERROR"
};

export interface UserInfo {
  token: string,
  key: string,
  email: string,
  secret: string
}

export interface AuthState {
  info: UserInfo
  error: null | string
};

interface AuthSuccessAction {
  type: AuthActionTypes.AUTH_SUCCESS;
  payload: UserInfo
};

interface AuthRemoveAction {
  type: AuthActionTypes.AUTH_REMOVE;
};

interface AuthErrorAction {
  type: AuthActionTypes.AUTH_ERROR;
  payload: string | null;
};

export type AuthAction = AuthSuccessAction | AuthRemoveAction | AuthErrorAction;