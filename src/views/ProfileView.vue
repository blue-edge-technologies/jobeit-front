<template>
  <div class="body">
    <!-- start-header-section -->
    <!-- start-header-section -->

    <nav-bar></nav-bar>
    <!-- end-header-section -->

    <!-- end-header-section -->

    <!-- start-banner-section -->
    <div class="banner-section">
      <div class="banner-row">
        <div class="banner-left">
          <h2 class="banner-heading">My <span>Profile</span></h2>
        </div>
        <div class="banner-right"></div>
      </div>
    </div>
    <!-- end-banner-section -->

    <!-- start-profile-info-section -->
    <section class="profile-info-section">
      <div class="container">
        <template v-if="error">
          <div class="alert alert-danger" role="alert">
            {{ error }}
          </div>
        </template>
        <div class="row culume-reverse-md align-items-center">
          <div class="col-sm-6 mt-5 align-self-start">
            <div class="profile-img">
              
              <img :src="imageURL" alt="Profile Image" />
              <h3 class="desc">{{ username }}</h3>
            </div>
          </div>
          <div class="col-sm-6 updata-profile-btn text-center">
            <!-- <button id="overview-tab" data-bs-toggle="pill"
                    data-bs-target="#overview" type="button" role="tab" aria-controls="overview"
                    aria-selected="true" class="link-btn active">Overview</button> -->
            <router-link to="/update-profile/" class="link-btn">Update my profile</router-link>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="review-star mt-4">
              <img src="/static/new/media/img/start.png" alt="" />
              <img src="/static/new/media/img/start.png" alt="" />
              <img src="/static/new/media/img/start.png" alt="" />
              <img src="/static/new/media/img/start.png" alt="" />
              <img src="/static/new/media/img/start.png" alt="" />
            </div>
            <div>
              <h3 class="small-heading mt-5 pt-4">
                <span>Your</span> Documents
              </h3>
              <div class="cv">
                <svg viewBox="0 0 40 50" fill="none">
                  <path
                    d="M25 0H5C2.25 0 0.0250006 2.25 0.0250006 5L0 45C0 47.75 2.225 50 4.975 50H35C37.75 50 40 47.75 40 45V15L25 0ZM5 45V5H22.5V17.5H35V45H5Z"
                    fill="#0146B1" />
                </svg>
                <p class="desc">Resume</p>
                <a :href="`${API_URL}/${profile?.cv}`" download class="common-btn-sm">Download</a>
              </div>
            </div>
            <div>
              <h3 class="small-heading mt-5 pt-4">
                <span>Personal</span> Information
              </h3>
              <ul class="list-with-icon">
                <li>
                  <span>
                    <svg viewBox="0 0 54 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M49.5 0.25H4.5C3.50544 0.25 2.55161 0.645088 1.84835 1.34835C1.14509 2.05161 0.75 3.00544 0.75 4V34C0.75 34.9946 1.14509 35.9484 1.84835 36.6516C2.55161 37.3549 3.50544 37.75 4.5 37.75H49.5C50.4946 37.75 51.4484 37.3549 52.1516 36.6516C52.8549 35.9484 53.25 34.9946 53.25 34V4C53.25 3.00544 52.8549 2.05161 52.1516 1.34835C51.4484 0.645088 50.4946 0.25 49.5 0.25ZM45.375 4L27 16.7125L8.625 4H45.375ZM4.5 34V5.70625L25.9313 20.5375C26.2451 20.7552 26.618 20.8719 27 20.8719C27.382 20.8719 27.7549 20.7552 28.0687 20.5375L49.5 5.70625V34H4.5Z"
                        fill="#0146B1"></path>
                    </svg>
                  </span>
                  <a href="">E-mail: {{ user?.email }}</a>
                </li>
                <li>
                  <span>
                    <svg viewBox="0 0 45 46" fill="none">
                      <path
                        d="M2.625 45.5C1.875 45.5 1.25 45.25 0.75 44.75C0.25 44.25 0 43.625 0 42.875V32.75C0 32.1667 0.1875 31.6558 0.5625 31.2175C0.9375 30.7808 1.41667 30.5 2 30.375L10.625 28.625C11.2083 28.5417 11.8025 28.5933 12.4075 28.78C13.0108 28.9683 13.5 29.25 13.875 29.625L19.75 35.5C22.9167 33.5833 25.8233 31.3125 28.47 28.6875C31.115 26.0625 33.3125 23.25 35.0625 20.25L29 14.125C28.625 13.75 28.385 13.3225 28.28 12.8425C28.1767 12.3642 28.1667 11.8333 28.25 11.25L29.875 2.5C29.9583 1.91667 30.2292 1.4375 30.6875 1.0625C31.1458 0.6875 31.6667 0.5 32.25 0.5H42.375C43.125 0.5 43.75 0.75 44.25 1.25C44.75 1.75 45 2.375 45 3.125C45 8.5 43.8017 13.7392 41.405 18.8425C39.01 23.9475 35.8433 28.4683 31.905 32.405C27.9683 36.3433 23.4483 39.51 18.345 41.905C13.24 44.3017 8 45.5 2.625 45.5ZM37.4375 15.5C38.1458 13.875 38.6875 12.2292 39.0625 10.5625C39.4375 8.89583 39.7292 7.20833 39.9375 5.5H34.375L33.3125 11.375L37.4375 15.5ZM15.0625 37.875L10.875 33.6875L5 34.875V40.375C6.70833 40.25 8.40667 39.9792 10.095 39.5625C11.7817 39.1458 13.4375 38.5833 15.0625 37.875Z"
                        fill="#0146B1"></path>
                    </svg>
                  </span>
                  <a href="">Phone number: {{ profile?.phoneNumber }}</a>
                </li>
                <li>
                  <span>
                    <svg viewBox="0 0 53 67" fill="none">
                      <path
                        d="M26.5 44.3665C29.5917 44.3665 32.3797 43.5952 34.8641 42.0527C37.3484 40.5124 39.3083 38.4811 40.7437 35.9588C38.8115 34.3334 36.6307 33.0857 34.2016 32.2157C31.7724 31.3481 29.2052 30.9142 26.5 30.9142C23.7948 30.9142 21.2276 31.3481 18.7984 32.2157C16.3693 33.0857 14.1885 34.3334 12.2562 35.9588C13.6917 38.4811 15.6516 40.5124 18.1359 42.0527C20.6203 43.5952 23.4083 44.3665 26.5 44.3665ZM26.5 27.5512C28.3219 27.5512 29.8821 26.892 31.1806 25.5737C32.4769 24.2576 33.125 22.6748 33.125 20.8251C33.125 18.9754 32.4769 17.3925 31.1806 16.0764C29.8821 14.7581 28.3219 14.099 26.5 14.099C24.6781 14.099 23.119 14.7581 21.8228 16.0764C20.5243 17.3925 19.875 18.9754 19.875 20.8251C19.875 22.6748 20.5243 24.2576 21.8228 25.5737C23.119 26.892 24.6781 27.5512 26.5 27.5512ZM26.5 58.9958C33.2354 52.7181 38.2318 47.0143 41.4891 41.8845C44.7464 36.757 46.375 32.2034 46.375 28.2238C46.375 22.1142 44.456 17.1111 40.6179 13.2145C36.782 9.32005 32.076 7.37284 26.5 7.37284C20.924 7.37284 16.2169 9.32005 12.3788 13.2145C8.54294 17.1111 6.625 22.1142 6.625 28.2238C6.625 32.2034 8.25365 36.757 11.5109 41.8845C14.7682 47.0143 19.7646 52.7181 26.5 58.9958ZM26.5 66.6467C26.0583 66.6467 25.6167 66.5627 25.175 66.3945C24.7333 66.2263 24.3469 66.0021 24.0156 65.7219C15.9552 58.4913 9.9375 51.7798 5.9625 45.5873C1.9875 39.3925 0 33.6047 0 28.2238C0 19.8162 2.66435 13.1181 7.99306 8.12953C13.3196 3.141 19.4885 0.646729 26.5 0.646729C33.5115 0.646729 39.6804 3.141 45.0069 8.12953C50.3356 13.1181 53 19.8162 53 28.2238C53 33.6047 51.0125 39.3925 47.0375 45.5873C43.0625 51.7798 37.0448 58.4913 28.9844 65.7219C28.6531 66.0021 28.2667 66.2263 27.825 66.3945C27.3833 66.5627 26.9417 66.6467 26.5 66.6467Z"
                        fill="#0146B1" />
                    </svg>
                  </span>
                  <a href=""> Ethnicity: {{ profile?.ethnicity }}</a>
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-info-circle"
                      viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="#0146B1"/>
                      <path
                        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="#0146B1"/>
                    </svg>
                  </span>
                  <a href="">Maritial Status: {{ profile?.marital_status }}</a>
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-info-circle"
                      viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="#0146B1"/>
                      <path
                        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="#0146B1"/>
                    </svg>
                  </span>
                  <a href="">Address Line 1: {{ profile?.addressLine1 }}</a>
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-info-circle"
                      viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="#0146B1"/>
                      <path
                        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="#0146B1"/>
                    </svg>
                  </span>
                  <a href="">Address Line 2: {{ profile?.addressLine2 }}</a>
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-info-circle"
                      viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="#0146B1"/>
                      <path
                        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="#0146B1"/>
                    </svg>
                  </span>
                  <a href="">Suburb: {{ profile?.suburb }}</a>
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-info-circle"
                      viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="#0146B1"/>
                      <path
                        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="#0146B1"/>
                    </svg>
                  </span>
                  <a href="">City: {{ profile?.city }}</a>
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-info-circle"
                      viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="#0146B1"/>
                      <path
                        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="#0146B1"/>
                    </svg>
                  </span>
                  <a href="">Province {{ profile?.province }}</a>
                </li>

                <!-- <li>
                  <span>
                    <svg viewBox="0 0 50 49" fill="none">
                      <path
                        d="M5 48.1467C3.625 48.1467 2.44833 47.6576 1.47 46.6792C0.49 45.6992 0 44.5217 0 43.1467V15.6467C0 14.2717 0.49 13.0951 1.47 12.1167C2.44833 11.1367 3.625 10.6467 5 10.6467H15V5.64673C15 4.27173 15.49 3.09423 16.47 2.11423C17.4483 1.13589 18.625 0.646729 20 0.646729H30C31.375 0.646729 32.5525 1.13589 33.5325 2.11423C34.5108 3.09423 35 4.27173 35 5.64673V10.6467H45C46.375 10.6467 47.5525 11.1367 48.5325 12.1167C49.5108 13.0951 50 14.2717 50 15.6467V43.1467C50 44.5217 49.5108 45.6992 48.5325 46.6792C47.5525 47.6576 46.375 48.1467 45 48.1467H5ZM5 43.1467H45V15.6467H5V43.1467ZM20 10.6467H30V5.64673H20V10.6467Z"
                        fill="#0146B1"
                      />
                    </svg>
                  </span>
                  <a href=""> Profession: None</a>
                </li> -->
              </ul>
            </div>
          </div>
          <div class="col-md-6" id="overview" role="tabpanel" aria-labelledby="overview-tab">
            <h3 class="small-heading mt-5 pt-4 mb-5"><span></span></h3>
            <p class="desc fs-3"></p>
            <h3 class="small-heading mt-5 pt-4 mb-5"><span>Education</span></h3>
            <ul class="list-with-icon">
              <li v-for="(education, index) in profile?.jobSeekerEducation || []" :key="index">
                {{ education.degree }}
                <br />
                {{ education.major_subject }}
                <br />

                {{ education.institution }}
                <br />

                {{ education.qualification }}
                <br />
                {{ education.start_date ? `${education.start_date} to ${education.graduated ? education.graduated :
                  "present"}`
                  : "" }}

              </li>
            </ul>
            <!-- <h3 class="small-heading mt-5 pt-4 mb-5">
              <span>Province</span>
            </h3>
            <ul class="list-with-icon">
              <li>
                {{ profile?.province }}

              </li>

            </ul>

            <h3 class="small-heading mt-5 pt-4 mb-5"><span>Skills</span></h3>
            <p></p> -->
          </div>
        </div>
      </div>
    </section>
    <!-- end-profile-info-section -->
    <footer-section></footer-section>
    <!-- end-footer-section -->
  </div>
</template>

<script>
import { API_URL } from "@/config";

import NavBar from "@/components/NavBar.vue";
import FooterSection from "@/components/FooterSection.vue";
export default {
  components: { NavBar, FooterSection },
  computed: {
    username() {
      return this.$store.getters.getUserName;
    },
    userNeedsProfile() {
      return this.$store.getters.getUserNeedsProfile;
    },
    profile() {
      return this.$store.getters.getProfile;
    },
    user() {
      return this.$store.getters.getUser;
    },
    imageURL() {
      return `${this.API_URL}${this.profile?.image}`;
    }
  },
  mounted() {
    this.$store.dispatch("getJobseeker").catch((err) => {
      this.error = err || "An error occurred. Please try again later.";
    });
    if (this.userNeedsProfile) {
      this.$router.push("/update-profile");
    }
  },
  watch: {
    userNeedsProfile() {
      if (this.userNeedsProfile) {
        this.$router.push("/update-profile");
      }
    },
  },
  data() {
    return {
      API_URL,
      error: null,
    };
  },
};
</script>

<style scoped>
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

.body {
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
  text-decoration: none !important;
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
header {
  padding: 3rem 0;
  background: #fff;
}

.header-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.desc {
  font-size: 2rem;
  line-height: 164.5%;
  color: #000000;
}

.desc-white {
  font-size: 2rem;
  line-height: 164.5%;
  color: #fff;
}

/* list-with-icon */
.list-with-icon {
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
  text-decoration: underline !important;
  color: #000000;
  font-size: 2.2rem;
  margin: 1rem;
}

.link-btn.active {
  color: #0146b1;
  font-weight: 600;
}

.menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.menu li {
  list-style: none;
}

.menu li a {
  margin: 0 1rem;
  font-size: 2rem;
  color: #000000;
  font-weight: 400;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.menu li a.active {
  font-weight: 700;
  color: #0146b1;
}

.menu li a:hover,
.header-right a:hover {
  color: #0146b1;
}

.header-right a {
  margin-left: 2rem;
  font-size: 2rem;
  color: #000000;
  font-weight: 400;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.section-heading {
  font-size: 3.6rem;
  color: #311643;
  font-weight: 700;
  margin-bottom: 3.5rem;
}

.section-heading span {
  color: #0146b1;
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

.common-btn {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border: 0;
  gap: 1.5rem;
  background: #b3fd4c;
  border-radius: 5rem;
  padding: 2rem 4rem;
  margin: 2rem 0;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  color: #000000;
  font-size: 2rem;
}

.common-btn-jobdesc {
  padding: 1.5rem 4rem;
}

.common-btn:focus {
  -webkit-box-shadow: -1px 10px 20px #d7ff9e;
  box-shadow: -1px 10px 20px #d7ff9e;
}

.common-btn span {
  color: #000000;
  font-weight: 400;
  font-size: 1.7rem;
}

.common-btn svg {
  width: 1.5rem;
  margin-top: 0.2rem;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.common-btn:hover {
  color: #000000;
  opacity: 0.7;
}

.common-btn:hover svg {
  -webkit-transform: translateX(1rem);
  -ms-transform: translateX(1rem);
  transform: translateX(1rem);
}

.common-btn-sm {
  background: #b3fd4c;
  width: 14rem;
  padding: 1rem 0;
  text-align: center;
  border-radius: 4rem;
  line-height: 2rem;
  color: #000000;
  display: block;
  font-size: 1.7rem;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
}

.common-btn-sm:hover {
  color: #000000;
  opacity: 0.7;
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
}

.job-tags a {
  padding: 1.5rem 2rem;
  background: rgba(53, 219, 255, 0.1);
  border: 0.3rem solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(8rem);
  backdrop-filter: blur(8rem);
  border-radius: 4rem;
  margin: 5rem 0;
}

/* hero-section */

.hero-heading {
  font-weight: 600;
  font-size: 5.7rem;
  line-height: 8rem;
  color: #fff;
}

.hero-heading span {
  color: #b3fd4c;
  font-weight: 700;
}

.small-heading {
  font-size: 3rem;
  font-weight: 600;
  color: #311643;
}

.small-heading span {
  font-weight: 700;
  color: #0146b1;
}

.hero-row {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 60% 40%;
  grid-template-columns: 60% 40%;
  -ms-grid-rows: 100%;
  grid-template-rows: 100%;
  -ms-flex-line-pack: center;
  align-content: center;
}

.hero-row>*:nth-child(1) {
  -ms-grid-row: 1;
  -ms-grid-column: 1;
}

.hero-row>*:nth-child(2) {
  -ms-grid-row: 1;
  -ms-grid-column: 2;
}

.hero-left-part {
  background: #0146b1;
  padding: 10rem 5rem 22rem 7rem;
  position: relative;
}

/* hero search box */
.search-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  width: 100%;
  background: #fff;
  border-radius: 4rem;
  overflow: hidden;
  margin-top: 6rem;
}

.search-field {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 7rem;
  margin-left: auto;
}

.search-field input {
  border: 0;
  outline: 0;
  padding: 0 1rem;
  width: 100%;
  font-size: 1.8rem;
}

.search-field svg,
.search-field input,
.search-btn {
  height: 100%;
}

.search-field svg {
  width: 2.2rem;
  margin-left: 2rem;
}

.search-field svg {
  background: white;
}

.search-btn {
  width: 15rem;
  border: 0;
  border-radius: 4rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: #b3fd4c;
  font-weight: 400;
  font-size: 1.8rem;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  color: #000000;
}

.search-btn svg {
  background: #b3fd4c;
  width: 2rem;
}

.search-btn:hover {
  opacity: 0.7;
}

.hero-right-part {
  background: #b3fd4c;
  position: relative;
  padding: 8rem 0;
}

.hero-imags {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-imags img {
  position: absolute;
}

.hero-imags1 {
  left: 15%;
  bottom: 0;
  height: 80%;
}

.hero-imags2 {
  right: 0;
  bottom: 0;
  height: 90%;
}

/* footer */
footer {
  padding: 5rem 1.5rem;
  background: #0146b1;
  border-radius: 3rem;
  margin: auto;
}

.footer-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
}

.subscribe-frm {
  height: 5.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 40rem;
  background: rgba(53, 219, 255, 0.1);
  border: 0.3rem solid rgba(255, 255, 255, 0.3);
  border-radius: 3rem;
  overflow: hidden;
  margin-top: 5rem;
}

.subscribe-frm input {
  padding-left: 2rem;
  border-radius: 3rem 0 0 3rem;
  background: transparent;
  color: #fff;
  width: 100%;
}

.subscribe-frm input,
.subscribe-frm button {
  border: 0;
  outline: 0;
  height: 100%;
}

.subscribe-frm button {
  background: #b3fd4c;
  padding: 0 2rem;
  border-radius: 3rem;
}

.social-icons a {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.social-icons a img {
  width: 4rem;
  margin-right: 1rem;
}

.social-icons a:hover {
  opacity: 0.7;
}

.copywrite-text {
  text-align: center;
  color: #fff;
  margin-top: 9rem;
  font-size: 1.9rem;
}

/* banner section */
/* .banner-section {
} */
.banner-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.banner-left {
  -ms-flex-preferred-size: 70%;
  flex-basis: 70%;
  background: #0146b1;
  text-align: center;
  height: 12rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.banner-right {
  -ms-flex-preferred-size: 30%;
  flex-basis: 30%;
  background: #b3fd4c;
}

/* related-job */
.related-job {
  background: #fff;
  padding: 4rem 4%;
  border-radius: 3rem;
  width: 97%;
  margin: 5rem auto;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
}

.related-job svg {
  fill: #0146b1;
}

.related-job:hover {
  color: #fff;
  background: -webkit-gradient(linear,
      left top,
      left bottom,
      from(#0d57cb),
      to(#0141a4));
  background: -o-linear-gradient(top, #0d57cb 0%, #0141a4 100%);
  background: linear-gradient(180deg, #0d57cb 0%, #0141a4 100%);
}

.related-job:hover a {
  color: #fff;
}

.related-job:hover .related-job-tag svg {
  fill: #fff;
}

.related-job:hover .resume-btn {
  background: #fff;
}

.related-job:hover .resume-btn span {
  color: #0146b1;
}

.related-job:hover .resume-btn svg {
  fill: #0146b1;
}

.related-job h3 {
  font-size: 2.2rem;
  font-weight: 700;
}

.related-job-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 5rem;
  margin-top: 4rem;
}

.related-job-content img {
  width: 6rem;
  height: 6rem;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
}

/* d-flex align-items-center justify-content-between */
.related-bottom {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.related-bottom .job-tags {
  margin-left: 10rem;
}

.related-job-tag {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 6rem;
}

.read-full-btn {
  cursor: pointer;
}

.read-full-btn p {
  color: #0146b1;
  font-weight: 600;
  font-size: 2rem;
}

.related-bottom .common-btn {
  padding: 1rem 3rem;
}

.related-bottom .job-tags a {
  padding: 0.8rem 2rem;
}

.header-right-profile {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  gap: 2rem;
}

.header-right .profile-pic {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  overflow: hidden;
}

.header-right .profile-pic img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.profile-img {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 2rem;
}

.profile-img img {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
}

.cv {
  margin-top: 2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 2rem;
}

.cv svg {
  width: 2rem;
}

/* update profile page css */
.input-field {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1.5rem 0;
}

.input-field label {
  font-size: 1.7rem;
  font-weight: 500;
}

.input-field input,
.input-field textarea {
  width: 100%;
  background: rgba(53, 219, 255, 0.1);
  border: 0.3rem solid rgba(255, 255, 255, 0.3);
  border-radius: 4rem;
  padding: 1.5rem 2rem;
  outline: 0;
}

.input-field textarea {
  height: 15rem;
}

.input-field input:focus {
  border-color: #0146b1;
}

/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

@media (max-width: 1100px) {
  .hero-imags1 {
    left: 5%;
    bottom: 0;
    height: 70%;
  }

  .hero-imags2 {
    right: 0;
    bottom: 0;
    height: 80%;
  }
}

@media (max-width: 1000px) {
  .dn-mobile {
    display: none;
  }

  .df-mobile {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
  }

  .hero-left-part {
    padding: 5rem 5rem 15rem 3rem;
  }

  .search-box {
    margin-bottom: 2rem;
  }

  /* bolgs page reponsive */
  .blogs {
    width: 100%;
  }

  .blog-bottom {
    margin-top: 2rem;
  }

  .company-search-field::after {
    display: none;
  }

  .contact-frm .field-colume.inner-flex {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 2rem;
  }

  .inner-flex-half {
    -ms-flex-preferred-size: 100% !important;
    flex-basis: 100% !important;
  }
}

@media (max-width: 950px) {
  .hero-imags2 {
    right: 0;
    bottom: 16%;
    height: 55%;
  }

  .hero-imags1 {
    left: 5%;
    bottom: 15%;
    height: 51%;
  }
}

@media (max-width: 768px) {
  .hero-pr-10 {
    padding-right: 0;
  }

  .hero-left-part {
    padding: 10rem 2rem 10rem 2rem;
  }

  .hero-left-part-index {
    padding: 10rem 2rem 16rem 2rem;
  }

  .hero-imags1 {
    left: -10%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 55%;
    height: auto;
  }

  .hero-imags2 {
    width: 60%;
    height: auto;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .hero-heading {
    font-size: 3.8rem;
    line-height: 5rem;
  }

  .hero-show {
    height: 7rem;
    width: 18rem;
  }

  .hero-show1 {
    left: 3rem;
    bottom: 6rem;
  }

  .hero-show3 {
    right: -15rem;
    top: 6rem;
  }

  .hero-show2 {
    bottom: 3rem;
    right: -10rem;
  }

  .search-box {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background: transparent;
  }

  .search-field {
    width: 100%;
    margin-bottom: 2rem;
    background: #fff;
    border-radius: 3rem;
    overflow: hidden;
  }

  .search-box {
    margin-bottom: 0;
  }

  .search-field,
  .mobile-submit-btn {
    height: 5.5rem;
  }

  .arrow-btns {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .search-box {
    margin-top: 5rem;
    border-radius: 2rem;
  }

  #owl-demo .item {
    padding: 3rem 2rem;
    border-radius: 5rem;
    margin: 0.5rem;
  }

  #owl-demo .item h2 {
    font-size: 1.6rem;
  }

  #owl-demo .item .job-adddress {
    gap: 1rem;
  }

  #owl-demo .item .job-tags {
    margin: 2.5rem 0;
  }

  .job-tags a {
    padding: 1rem 1rem;
    font-size: 1.4rem;
  }

  #owl-demo .item .company-logo span {
    font-size: 1.5rem;
    margin-left: 0;
  }

  #owl-demo .item .company-logo img {
    width: 3rem;
  }

  #owl-demo .item .job-adddress span {
    font-size: 1.2rem;
  }

  /* blogs page */
  .blog-bottom {
    margin-top: 2rem;
    width: 100%;
  }

  .bolg h3 {
    margin-bottom: 3rem;
  }

  .bolg .tags a {
    font-size: 1.7rem;
  }

  /* contact page */
  .img-map {
    height: 30rem;
  }

  /* porfile-page */
  .culume-reverse-md {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }

  /* job-descroption-page */
  .related-job-tag {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 1rem;
  }

  .related-bottom .job-tags {
    margin-left: 0;
  }

  .related-job {
    width: 98%;
  }

  .common-btn-block {
    display: block;
    text-align: center;
    width: 100%;
  }

  /* job search page */
  .job-company {
    width: 22rem;
  }

  .Location {
    width: 10rem;
  }

  .date-post {
    width: 13rem;
  }

  .skill {
    width: 7rem;
  }

  .experience {
    width: 17rem;
  }

  .job-type {
    width: 15rem;
  }

  .search-from .search-fields input,
  .search-from .search-fields select,
  .select-items div,
  .select-selected {
    font-size: 1.4rem;
    padding: 1rem;
  }

  .select-selected {
    padding: 0 1.5rem;
  }

  /* footer */
  footer {
    text-align: left;
  }

  footer .subscribe-frm {
    width: 100%;
    margin-right: auto;
    margin-bottom: 4rem;
  }

  .copywrite-text {
    text-align: left;
    margin-top: 5rem;
  }

  footer .text-center {
    text-align: left !important;
  }
}

@media (max-width: 576px) {
  .dn-sm {
    display: none;
  }

  .hero-row {
    -ms-grid-columns: 100% 0% !important;
    grid-template-columns: 100% 0% !important;
  }

  .hero-row-index {
    -ms-grid-columns: 60% 40% !important;
    grid-template-columns: 60% 40% !important;
  }

  .hero-show {
    display: none;
  }

  .search-field,
  .mobile-submit-btn {
    height: 5rem;
  }

  .banner-heading {
    font-size: 3.2rem;
  }

  .justify-center-sm,
  .text-center-sm {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
  }

  .hero-left-part {
    padding: 4rem 1rem 5rem 1rem;
  }

  .mobile-submit-btn {
    width: 100%;
  }

  .list-with-icon li a {
    font-size: 1.8rem;
  }

  .section-heading {
    font-size: 3rem;
  }

  /* blog page  */
  /* .blog-bottom {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    gap: 1rem;
  } */
  .bolg-img img {
    width: 8rem;
    height: 8rem;
  }

  .desc-white,
  .desc {
    font-size: 1.8rem;
  }

  .banner-left {
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
  }

  .banner-right {
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
  }

  .bolg-img {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    gap: 1.5rem;
  }

  .bolg {
    padding: 2rem;
  }

  /* contact apge reponsive */

  .contact-frm .field-colume input,
  .contact-frm .field-colume textarea {
    font-size: 1.8rem;
    padding: 0.7rem 2rem;
  }

  .contact-frm .submit-btn button {
    height: 5rem;
  }

  .contact-frm {
    gap: 2rem;
  }

  /* sign up page */

  .sign-right {
    border-radius: 3rem;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 59%;
  }

  .hero-heading {
    font-size: 3rem;
    line-height: 3rem;
  }

  .search-field input {
    font-size: 1.5rem;
  }

  .header-right a {
    margin-left: 1rem;
  }

  .header-row {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1rem;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }

  .blog-bottom {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .tags {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .common-btn-jobdesc {
    padding: 1rem 0.5rem;
    width: 16rem;
  }

  .related-job-content p {
    font-size: 1.5rem;
  }

  .related-bottom .common-btn span {
    font-size: 1.4rem;
  }
}

@media (max-width: 400px) {
  html {
    font-size: 57%;
  }

  .related-job-content {
    gap: 2.5rem;
  }

  .related-bottom .common-btn {
    padding: 0.7rem 1rem;
  }

  .bolg .common-btn {
    width: 10rem;
  }
}</style>