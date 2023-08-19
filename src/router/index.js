import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import ProfileView from "../views/ProfileView.vue";
import UpdateProfileView from "../views/UpdateProfileView.vue";
import JobSearchView from "../views/JobSearchView.vue";
import ContactView from "../views/ContactView.vue";
import BlogView from "../views/BlogView.vue";
import JobDetailsView from "../views/JobDetailsView.vue";
import ActivateEmailCallback from "../views/ActivateEmailCallback.vue";
import ActivateEmailView from "../views/ActivateEmailView.vue";
import ResetPasswordCallback from "../views/ResetPasswordCallback.vue";
import UpdateAccountView from "../views/UpdateAccountView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
    meta: { authRequired: true, }
  },
  {
    path: "/update-profile",
    name: "update-profile",
    component: UpdateProfileView,
    meta: { authRequired: true, }
  },
  {
    path: "/update-account",
    name: "update-account",
    component: UpdateAccountView,
  },
  {
    path: "/job-search",
    name: "job-search",
    component: JobSearchView,
  },
  {
    path: "/jobs/:slug",
    name: "jobs",
    component: JobDetailsView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/activate/:uid/:token",
    name: "activate-callback",
    component: ActivateEmailCallback,
  },
  {
    path: "/activate",
    name: "activate",
    component: ActivateEmailView,
  },
  {
    path: "/reset-password/:uid/:token",
    name: "reset-password-callback",
    component: ResetPasswordCallback,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
