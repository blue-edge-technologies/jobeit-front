import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import qs from "qs";
import { API_URL } from "@/config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      email: null,
      first_name: null,
      last_name: null,
      password: null,
    },
    job: null,
    jobs: [],
    tokens: {
      access: null,
      refresh: null,
    },
  },
  getters: {
    getJobs(state) {
      return state.jobs;
    },
    getJob(state) {
      return state.job;
    },
    isAuthenticated(state) {
      return !!state.tokens.access;
    },
    getUserName(state) {
      return state.user?.first_name;
    },
  },
  mutations: {
    setJobs(state, jobs) {
      state.jobs = jobs;
    },
    setJob(state, job) {
      state.job = job;
    },
    setUser(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    setToken(state, tokens) {
      state.tokens = tokens;
      localStorage.setItem("access", state.tokens.access);
      localStorage.setItem("refresh", state.tokens.refresh);
    },

    loadFromLocalStorage(state) {
      state.tokens.access = localStorage.getItem("access");
      state.tokens.refresh = localStorage.getItem("refresh");
      state.user = JSON.parse(localStorage.getItem("user"));
    },
  },

  actions: {
    async loadJobs({ commit }, { page, filters }) {
      const response = await axios.get(
        `${API_URL}/jobs/list/?${qs.stringify({ page, ...filters })}`
      );
      commit("setJobs", response.data.results);
      return response.data;
    },
    async getJob({ commit }, { slug }) {
      const response = await axios.get(`${API_URL}/jobs/list/${slug}/`);
      commit("setJob", response.data);
    },
    async loginUser({ commit, dispatch }, { email, password }) {
      const response = await axios.post(`${API_URL}/auth/jwt/create/`, {
        email,
        password,
      });
      commit("setToken", response.data);
      dispatch("getMe");
    },
    async getMe({ commit, state }) {
      const response = await axios.get(`${API_URL}/auth/users/me/`, {
        headers: { Authorization: `JWT ${state.tokens.access}` },
      });
      commit("setUser", response.data);
    },
    logout({ commit }) {
      commit("setToken", { access: null, refresh: null });
      commit("setUser", { user: null });
      localStorage.clear();
    },
  },

  modules: {},
});
