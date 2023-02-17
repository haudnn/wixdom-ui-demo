import { createStore, Store } from "vuex";

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
      state.role = payload.role;
    },
    // CHANGE ROLE OF USER IN THE PROJECT
    removeUserRole(state: RootState) {
      state.role = "";
    },
    login(state: RootState) {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true");
    },
    logout(state: RootState) {
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn");
    },
  },
  actions: {
    changeUserRole({ commit }: any, payload: changedRolePayload) {
      commit("changeUserRole", payload);
    },
    removeUserRole({ commit }: any) {
      commit("removeUserRole");
    },
  },
  getters: {
    getRole(state: RootState) {
      return state.role;
    },
  },
});

export default store;
