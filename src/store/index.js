import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios";
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
    userNeedsProfile: false,
    profile: {
      cv: null,
      image: null,
      cover_letter: null,
      date_birth: null,
      addressLine1: null,
      addressLine2: null,
      suburb: null,
      city: null,
      province: null,
      phoneNumber: null,
      job_seeker_education: null,
      sex: null,
      ethnicity: null,
      marital_status: null,
    },
    updateProfileErrors: null,
    jobsCount: null,
    urlOptionFilters: [],
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
    getUser(state) {
      return state.user;
    },
    getUserNeedsProfile(state) {
      return state.userNeedsProfile;
    },
    getProfile(state) {
      return state.profile;
    },
    getUpdateProfileErrors(state) {
      return state.updateProfileErrors;
    },
    jobs_count(state) {
      return state.jobsCount;
    },
    getURLFilters(state) {
      return state.urlOptionFilters;
    },
  },
  mutations: {
    setJobs(state, jobs) {
      state.jobs = jobs;
    },
    setJobsCount(state, jobsCount) {
      state.jobsCount = jobsCount;
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
    setProfile(state, profile) {
      state.profile = profile;
    },
    setUserNeedsProfile(state, userNeedsProfile) {
      state.userNeedsProfile = userNeedsProfile;
    },
    setUpdateProfileErrors(state, updateProfileErrors) {
      state.updateProfileErrors = updateProfileErrors;
    },
    setURLFilters(state, urlOptionFilters) {
      state.urlOptionFilters = urlOptionFilters;
    },
  },

  actions: {
    async signup({ commit }, { email, first_name, last_name, password }) {
      const response = await axios.post(`${API_URL}/auth/users/`, {
        email,
        first_name,
        last_name,
        password,
      });
      commit("setUser", response.data);
    },
    async activateEmail(_, { uid, token }) {
      await axios.post(`${API_URL}/auth/users/activation/`, {
        uid,
        token,
      });
    },
    async resetPassword(_, { uid, token, new_password }) {
      await axios.post(`${API_URL}/auth/users/reset_password_confirm/`, {
        uid,
        token,
        new_password,
      });
    },
    async requestResetPassword(_, { email }) {
      await axios.post(`${API_URL}/auth/users/reset_password/`, {
        email,
      });
    },
    async loadJobs({ commit }, { page, filters }) {
      const response = await axios.get(
        `${API_URL}/jobs/list/?${qs.stringify({ page, ...filters })}`
      );
      commit("setJobs", response.data.results);
      commit("setJobsCount", response.data.count);
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
    async updateAccount({ commit, state }, { first_name, last_name }) {
      const response = await axios.post(
        `${API_URL}/auth/users/me/`,
        { first_name, last_name },
        {
          headers: { Authorization: `JWT ${state.tokens.access}` },
        }
      );
      commit("setUser", response.data);
    },
    async updateJobseeker({ commit, state }, formData) {
      console.log(API_URL);
      try {
        const response = await axios.post(`${API_URL}/jobseeker/`, formData, {
          headers: {
            Authorization: `JWT ${state.tokens.access}`,
            "Content-Type": "multipart/form-data",
          },
        });
        commit("setProfile", response.data);
      } catch (e) {
        if (
          e.response.status === 400 &&
          e.response.data.user.includes(
            "Job Seeker with this user already exists."
          )
        ) {
          try {
            const response = await axios.patch(
              `${API_URL}/jobseeker/me`,
              formData,
              {
                headers: {
                  Authorization: `JWT ${state.tokens.access}`,
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            commit("setProfile", response.data);
          } catch (e) {
            commit("setUpdateProfileErrors", e.response.data);
          }
        } else {
          commit("setUpdateProfileErrors", e.response.data);
        }
      }
    },
    async getJobseeker({ commit, state }) {
      try {
        try {
          const response = await axios.get(`${API_URL}/jobseeker/me/`, {
            headers: { Authorization: `JWT ${state.tokens.access}` },
          });
          commit("setProfile", response.data);
        } catch (e) {
          if (
            e?.response?.status === 400 &&
            e?.response?.data?.error === "User Has no Profile yet"
          ) {
            commit("setUserNeedsProfile", true);
          }
          console.log(e);
        }
      } catch (err) {
        // something went wront
        console.error(err);
      }
    },
    logout({ commit }) {
      commit("setToken", { access: null, refresh: null });
      commit("setUser", { user: null });
      localStorage.clear();
    },
    async getURLFilters({ commit }) {
      try {
        const response = await axios.get(`${API_URL}/jobs/filtertags/`);
        commit("setURLFilters", response.data);
      } catch (e) {
        console.log(e);
      }
    },
  },

  modules: {},
});
