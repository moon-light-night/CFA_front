import { Module } from "vuex";
import { RootState } from "../types";
import { AuthenticationState } from "./types";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

import Storage from "@scripts/storage";

const state: AuthenticationState = {
  accessToken: Storage.getItem("accessToken") || "asd",
  refreshToken: Storage.getItem("refreshToken") || "",
};

export const authentication: Module<AuthenticationState, RootState> = {
  state,
  getters,
  actions,
  mutations,
};
