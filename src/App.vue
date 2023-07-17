<template>
  <div class="">
    <nav-bar-vue />
    <hero-section-vue />
    <search-job />
    <footer-section />
  </div>
</template>

<script>
import FooterSection from "./components/FooterSection.vue";
import HeroSectionVue from "./components/HeroSection.vue";
import NavBarVue from "./components/NavBar.vue";
import SearchJob from "./components/SearchJob.vue";
export default {
  components: {
    NavBarVue,
    HeroSectionVue,
    SearchJob,
    FooterSection,
  },
};
</script>

<style>
/* .heabder-link {
  margin-left: 0px !important;
} */

/* search-job-section */

/* ---------------------------------------------------- Updated style css -------------------------------------------------- */

/* .main-link {
  color: #fff !important;
}
.main-link:hover {
  color: #000000 !important;
} */

/* .header-link {
  margin-left: 0px !important;
} */
/* .dropdown-item:focus,
.dropdown-item:hover {
  color: #1e2125;
  background-color: transparent !important;
} */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

* {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}
body {
  font-size: 1.8rem;
  background: #f8f5ee;
}
dl,
ol,
ul {
  margin-bottom: 0;
  padding-left: 0;
}
a {
  text-decoration: none;
}
section {
  padding: 5rem 0;
  overflow: hidden;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #9a9dad;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #9a9dad;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #9a9dad;
}

input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  color: #9a9dad;
}

input::placeholder,
textarea::placeholder {
  color: #9a9dad;
}
/* header style */

/* list-with-icon */
/* .list-with-icon {
  padding-left: 0;
}
.list-with-icon li {
  list-style: none;
  margin: 2rem 0;
}
.list-with-icon li svg {
  width: 2.2rem;
  margin-right: 1.3rem;
}
.list-with-icon li a {
  color: #000000;
  font-size: 2rem;
  letter-spacing: 0.07rem;
}
.link-btn {
  text-decoration: underline;
  color: #000000;
  font-size: 2.2rem;
  margin: 1rem;
}
.link-btn.active {
  color: #0146b1;
  font-weight: 600;
}

.banner-heading {
  font-size: 3.6rem;
  color: #fff;
  font-weight: 600;
}
.banner-heading span {
  color: #b3fd4c;
}
.bold-banner-heading {
  font-size: 4.6rem;
  color: #fff;
  font-weight: 800;
}

.resume-btn {
  background: #0146b1;
  margin-left: auto;
  -webkit-transform: translateX(-2rem);
  -ms-transform: translateX(-2rem);
  transform: translateX(-2rem);
}
.resume-btn span {
  color: #fff;
}
.related-job .resume-btn svg {
  fill: #fff;
}
.transparent-btn {
  padding: 1.5rem 3rem;
  border-radius: 4rem;
  background: rgba(53, 219, 255, 0.1);
  border: 0.5rem solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(8rem);
  backdrop-filter: blur(8rem);
  text-decoration: none;
  color: #fff;
  font-size: 1.8rem;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
  text-decoration: none;
}
.transparent-btn-sm {
  padding: 0.7rem 2rem;
  font-size: 1.4rem;
}
.transparent-btn:hover {
  opacity: 0.7;
  color: #fff;
}
.review-star img {
  width: 2.3rem;
  margin-right: 0.3rem;
} */

/* hero-section */

/* footer */
</style>