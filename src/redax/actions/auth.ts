/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AuthActionTypes,

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

export const AuthRemoveAction = (): any => {
  return { type: AuthActionTypes.AUTH_REMOVE };
};
