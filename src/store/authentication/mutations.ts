import { MutationTree } from "vuex";
import { AuthenticationState } from "@store/authentication/types";

export enum AuthenticationMutations {
  SET_AUTHENTICATION = "SET_AUTHENTICATION",
}

export const mutations: MutationTree<AuthenticationState> = {
  [AuthenticationMutations.SET_AUTHENTICATION](state, payload) {
    const { accessToken, refreshToken } = payload;
    state.accessToken = accessToken;
    state.refreshToken = refreshToken;
  },
};
