import {
  AuthActionTypes,
  AuthAction,
  UserInfo,
} from "../../types/authStoreTypse";

export const AuthSuccessAction = (payload:UserInfo): any => {
  return { type: AuthActionTypes.AUTH_SUCCESS, payload: payload };
};

export const AuthErrorAction = (
  payload: string | any,
): any => {
  return { type: AuthActionTypes.AUTH_ERROR, payload: payload };
};

export const AuthRemoveAction = (): AuthAction => {
  return { type: AuthActionTypes.AUTH_REMOVE };
};
