import { _setCurrentAccount } from "~/store/auth/index";
import store from "~/store";

export const setCurrentAccount = (data) =>
  store.dispatch(_setCurrentAccount(data));
