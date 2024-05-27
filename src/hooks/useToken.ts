import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redax/index";

export const useToken: TypedUseSelectorHook<RootState> =
  useSelector;
