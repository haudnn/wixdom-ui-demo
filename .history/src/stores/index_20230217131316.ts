import { createStore, Store } from "vuex";
import type { Commit } from "vuex";
interface RootState {
  role: string;
  isLoggedIn: boolean;
}
interface changedRolePayload {
  role: string;
}

const store: Store<RootState> = createStore({
  state: {
    role: "",
    isLoggedIn: false,
  },
  mutations: {
    // CHANGE ROLE OF USER IN THE PROJECT
    changeUserRole(state: RootState, payload: changedRolePayload) {
      const { role } = payload;
      state.role = role;
    },
    // REMOVE ROLE OF USER IN THE PROJECT
    removeUserRole(state: RootState) {
      state.role = "";
    },
    // KEEP STATE LOGIN OF USER IN LOCALSTORAGE
    login(state: RootState) {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true");
    },
    // REMOVE STATE LOGIN OF USER IN LOCALSTORAGE
    logout(state: RootState) {
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn");
    },
  },
  actions: {
    // ACTION: Change user role
    changeUserRole(
      { commit }: { commit: Commit },
      payload: changedRolePayload
    ) {
      commit("changeUserRole", payload);
    },
    // ACTION: Change remove user role
    removeUserRole({ commit }: { commit: Commit }) {
      commit("removeUserRole");
    },
    login({ commit }: { commit: Commit }) {
      commit("login");
    },
    logout({ commit }: { commit: Commit }) {
      commit("logout");
    },
  },
  getters: {
    getRole(state: RootState) {
      return state.role;
    },
    getIsLoggedIn(state: RootState) {
      return state.isLoggedIn;
    },
  },
});

export default store;
