<template>
  <div class="body">
    <nav-bar></nav-bar>
    <div class="banner-section">
      <div class="banner-row">
        <div class="banner-left">
          <h2 class="banner-heading">Search <span> for a job</span></h2>
        </div>
        <div class="banner-right"></div>
      </div>
    </div>
    <!-- end-banner-section -->

    <!-- start-search-form-section -->
    <section class="sob-search-section">
      <div class="container">
        <h2 class="section-heading">
          <span>Filter</span> according to your preferences
        </h2>
        <div class="search-from">
          <div class="field-wapper">
            <div class="scroll-bar">
              <div></div>
            </div>

            <div class="">
              <div class="search-fields">
                <svg width="20" height="20" viewBox="0 0 34 32" fill="none">
                  <path
                    d="M20.333 6.93473V3.6014H13.6663V6.93473H20.333ZM3.66634 11.9347V26.9347C3.66634 27.8514 4.41634 28.6014 5.33301 28.6014H28.6663C29.583 28.6014 30.333 27.8514 30.333 26.9347V11.9347C30.333 11.0181 29.583 10.2681 28.6663 10.2681H5.33301C4.41634 10.2681 3.66634 11.0181 3.66634 11.9347ZM30.333 6.93473C32.183 6.93473 33.6663 8.41807 33.6663 10.2681V28.6014C33.6663 30.4514 32.183 31.9347 30.333 31.9347H3.66634C1.81634 31.9347 0.333008 30.4514 0.333008 28.6014L0.349674 10.2681C0.349674 8.41807 1.81634 6.93473 3.66634 6.93473H10.333V3.6014C10.333 1.7514 11.8163 0.268066 13.6663 0.268066H20.333C22.183 0.268066 23.6663 1.7514 23.6663 3.6014V6.93473H30.333Z"
                    fill="#0146B1"
                  />
                </svg>
                <input
                  type="text"
                  name="job_company"
                  class="filter-job-input-box"
                  placeholder="Search Job or Company or Skill"
                  id="id_job_company"
                  v-model="filters.job_company"
                />
                <!-- <input type="text" placeholder="Job or Company Name" class="job-company"> -->
              </div>
              <div class="search-fields">
                <svg width="20" height="20" viewBox="0 0 40 50" fill="none">
                  <path
                    d="M20 25C21.375 25 22.5525 24.51 23.5325 23.53C24.5108 22.5517 25 21.375 25 20C25 18.625 24.5108 17.4475 23.5325 16.4675C22.5525 15.4892 21.375 15 20 15C18.625 15 17.4483 15.4892 16.47 16.4675C15.49 17.4475 15 18.625 15 20C15 21.375 15.49 22.5517 16.47 23.53C17.4483 24.51 18.625 25 20 25ZM20 43.375C25.0833 38.7083 28.8542 34.4683 31.3125 30.655C33.7708 26.8433 35 23.4583 35 20.5C35 15.9583 33.5517 12.2392 30.655 9.3425C27.76 6.4475 24.2083 5 20 5C15.7917 5 12.2392 6.4475 9.3425 9.3425C6.4475 12.2392 5 15.9583 5 20.5C5 23.4583 6.22917 26.8433 8.6875 30.655C11.1458 34.4683 14.9167 38.7083 20 43.375ZM20 50C13.2917 44.2917 8.28167 38.9892 4.97 34.0925C1.65667 29.1975 0 24.6667 0 20.5C0 14.25 2.01083 9.27083 6.0325 5.5625C10.0525 1.85417 14.7083 0 20 0C25.2917 0 29.9475 1.85417 33.9675 5.5625C37.9892 9.27083 40 14.25 40 20.5C40 24.6667 38.3442 29.1975 35.0325 34.0925C31.7192 38.9892 26.7083 44.2917 20 50Z"
                    fill="#0146B1"
                  ></path>
                </svg>
                <input
                  type="text"
                  name="location"
                  class="filter-job-input-box"
                  placeholder="Location"
                  id="id_location"
                  v-model="filters.location"
                />

                <!-- <input type="text" placeholder="Location" class="Location"> -->
              </div>
              <div class="search-fields" style="padding: inherit">
                <div class="filter">
                  <div class="custom-select experience">
                    <select
                      name="experience_level"
                      class="filter-job-input-box"
                      placeholder="Category"
                      id="id_experience_level"
                      v-model="filters.experience_level"
                    >
                      <option value="" selected>Experience Level</option>

                      <option value="No Experience">No Experience</option>

                      <option value="1-3 Years">1-3 Years</option>

                      <option value="4-5 Years">4-5 Years</option>

                      <option value="6++">More than 6 Years</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="search-fields" style="padding: inherit">
              <div class="filter">
                <div class="custom-select job-type">
                  <select
                    name="contract_type"
                    class="filter-job-input-box"
                    placeholder="Contract Type"
                    id="id_contract_type"
                    v-model="filters.contract_type"
                  >
                    <option value="" selected>Job Type</option>

                    <option value="1">Full-time</option>

                    <option value="2">Contract</option>

                    <option value="3">Internship</option>
                  </select>
                  <!-- <select>
                    <option value="0">Job Type</option>
                    <option value="1">Expert</option>
                    <option value="2">Medium</option>
                    <option value="2">Beggner</option>
                  </select> -->
                </div>
              </div>
            </div>
            <div class="search-fields" style="padding: inherit">
              <div class="filter">
                <div class="custom-select degree">
                  <select
                    name="degree"
                    class="multiple filter-job-input-box"
                    placeholder="Category"
                    id="id_degree"
                    v-model="filters.degree"
                  >
                    <option value="" selected>Degree</option>

                    <option value="No Degree">No Degree</option>

                    <option value="High School">High School</option>

                    <option value="Associate">Associate</option>

                    <option value="Bachelor">Bachelor</option>

                    <option value="Master">Master</option>

                    <option value="Doctorate">Doctorate</option>

                    <option value="Professional">Professional</option>

                    <option value="Other">Other</option>

                    <option value="Not Specified">Not Specified</option>

                    <option value="Vocational">Vocational</option>

                    <option value="Certification">Certification</option>

                    <option value="Diploma">Diploma</option>

                    <option value="GED">GED</option>
                  </select>
                  <!-- <select>
                                    <option value="0">Degree</option>
                                    <option value="1">Expert</option>
                                    <option value="2">Medium</option>
                                    <option value="2">Beggner</option>
                                </select> -->
                </div>
              </div>
            </div>
            <div class="search-fields">
              <svg width="20" height="20" viewBox="0 0 30 35" fill="none">
                <path
                  d="M15 20.8335C14.5278 20.8335 14.1317 20.6735 13.8117 20.3535C13.4917 20.0335 13.3322 19.6379 13.3333 19.1668C13.3333 18.6946 13.4933 18.2985 13.8133 17.9785C14.1333 17.6585 14.5289 17.4991 15 17.5002C15.4722 17.5002 15.8683 17.6602 16.1883 17.9802C16.5083 18.3002 16.6678 18.6957 16.6667 19.1668C16.6667 19.6391 16.5067 20.0352 16.1867 20.3552C15.8667 20.6752 15.4711 20.8346 15 20.8335ZM8.33334 20.8335C7.86111 20.8335 7.465 20.6735 7.145 20.3535C6.825 20.0335 6.66556 19.6379 6.66667 19.1668C6.66667 18.6946 6.82667 18.2985 7.14667 17.9785C7.46667 17.6585 7.86223 17.4991 8.33334 17.5002C8.80556 17.5002 9.20167 17.6602 9.52167 17.9802C9.84167 18.3002 10.0011 18.6957 10 19.1668C10 19.6391 9.84 20.0352 9.52 20.3552C9.2 20.6752 8.80445 20.8346 8.33334 20.8335ZM21.6667 20.8335C21.1944 20.8335 20.7983 20.6735 20.4783 20.3535C20.1583 20.0335 19.9989 19.6379 20 19.1668C20 18.6946 20.16 18.2985 20.48 17.9785C20.8 17.6585 21.1956 17.4991 21.6667 17.5002C22.1389 17.5002 22.535 17.6602 22.855 17.9802C23.175 18.3002 23.3344 18.6957 23.3333 19.1668C23.3333 19.6391 23.1733 20.0352 22.8533 20.3552C22.5333 20.6752 22.1378 20.8346 21.6667 20.8335ZM15 27.5002C14.5278 27.5002 14.1317 27.3402 13.8117 27.0202C13.4917 26.7002 13.3322 26.3046 13.3333 25.8335C13.3333 25.3613 13.4933 24.9652 13.8133 24.6452C14.1333 24.3252 14.5289 24.1657 15 24.1668C15.4722 24.1668 15.8683 24.3268 16.1883 24.6468C16.5083 24.9668 16.6678 25.3624 16.6667 25.8335C16.6667 26.3057 16.5067 26.7018 16.1867 27.0218C15.8667 27.3418 15.4711 27.5013 15 27.5002ZM8.33334 27.5002C7.86111 27.5002 7.465 27.3402 7.145 27.0202C6.825 26.7002 6.66556 26.3046 6.66667 25.8335C6.66667 25.3613 6.82667 24.9652 7.14667 24.6452C7.46667 24.3252 7.86223 24.1657 8.33334 24.1668C8.80556 24.1668 9.20167 24.3268 9.52167 24.6468C9.84167 24.9668 10.0011 25.3624 10 25.8335C10 26.3057 9.84 26.7018 9.52 27.0218C9.2 27.3418 8.80445 27.5013 8.33334 27.5002ZM21.6667 27.5002C21.1944 27.5002 20.7983 27.3402 20.4783 27.0202C20.1583 26.7002 19.9989 26.3046 20 25.8335C20 25.3613 20.16 24.9652 20.48 24.6452C20.8 24.3252 21.1956 24.1657 21.6667 24.1668C22.1389 24.1668 22.535 24.3268 22.855 24.6468C23.175 24.9668 23.3344 25.3624 23.3333 25.8335C23.3333 26.3057 23.1733 26.7018 22.8533 27.0218C22.5333 27.3418 22.1378 27.5013 21.6667 27.5002ZM3.33334 34.1668C2.41667 34.1668 1.63167 33.8402 0.978336 33.1868C0.325003 32.5335 -0.00110828 31.7491 2.82966e-06 30.8335V7.50017C2.82966e-06 6.5835 0.32667 5.7985 0.980003 5.14517C1.63334 4.49184 2.41778 4.16572 3.33334 4.16684H5V2.50017C5 2.02795 5.16 1.63184 5.48 1.31184C5.8 0.991835 6.19556 0.832391 6.66667 0.833502C7.13889 0.833502 7.535 0.993502 7.855 1.3135C8.175 1.6335 8.33445 2.02906 8.33334 2.50017V4.16684H21.6667V2.50017C21.6667 2.02795 21.8267 1.63184 22.1467 1.31184C22.4667 0.991835 22.8622 0.832391 23.3333 0.833502C23.8056 0.833502 24.2017 0.993502 24.5217 1.3135C24.8417 1.6335 25.0011 2.02906 25 2.50017V4.16684H26.6667C27.5833 4.16684 28.3683 4.4935 29.0217 5.14684C29.675 5.80017 30.0011 6.58461 30 7.50017V30.8335C30 31.7502 29.6733 32.5352 29.02 33.1885C28.3667 33.8418 27.5822 34.1679 26.6667 34.1668H3.33334ZM3.33334 30.8335H26.6667V14.1668H3.33334V30.8335ZM3.33334 10.8335H26.6667V7.50017H3.33334V10.8335Z"
                  fill="#0146B1"
                />
              </svg>
              <select
                name="date_posted"
                class="filter-job-input-box"
                id="id_date_posted"
                v-model="filters.date_posted"
              >
                <option value="" selected>Date Posted</option>

                <option value="Last 24 Hours">Last 24 Hours</option>

                <option value="Last 3 Days">Last 3 Days</option>

                <option value="Last 7 Days">Last 7 Days</option>

                <option value="Last 14 Days">Last 14 Days</option>

                <option value="Last 30 Days">Last 30 Days</option>

                <option value="Last 60 Days">Last 60 Days</option>

                <option value="Last 90 Days">Last 90 Days</option>
              </select>
              <!-- <input type="text" placeholder="Date Posted" class="date-post"> -->
            </div>
            <div class="search-fields">
              <svg width="20" height="20" viewBox="0 0 36 33" fill="none">
                <path
                  d="M35.5 32.5H25.5V0H35.5V32.5ZM28 30H33V2.5H28V30ZM23 32.5H13V10H23V32.5ZM15.5 30H20.5V12.5H15.5V30ZM10.5 32.5H0.5V17.5H10.5V32.5ZM3 30H8V20H3V30Z"
                  fill="#0146B1"
                />
              </svg>
              <input
                type="text"
                name="skills"
                class="filter-job-input-box"
                placeholder="Skills"
                id="id_skills"
                v-model="filters.skills"
              />
              <!-- <input type="text" placeholder="Skills" class="skill"> -->
            </div>
            <div class="search-fields" style="padding: inherit">
              <div class="filter">
                <div class="custom-select degree">
                  <select
                    name="roles"
                    class="form-control filter-job-input-box"
                    id="id_roles"
                    v-model="filters.roles"
                  >
                    <option value="" selected>Role</option>
                  </select>
                  <!-- <select>
                                    <option value="0">Degree</option>
                                    <option value="1">Expert</option>
                                    <option value="2">Medium</option>
                                    <option value="2">Beggner</option>
                                </select> -->

                  <i class="uil uil-bars"></i>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <button
            class="common-btn common-btn-block filter-btn"
            @click="applyFilters"
          >
            <svg width="25" height="25" viewBox="0 0 30 31" fill="none">
              <path
                d="M27.6667 30.5L17.1667 20C16.3333 20.6667 15.375 21.1944 14.2917 21.5833C13.2083 21.9722 12.0556 22.1667 10.8333 22.1667C7.80556 22.1667 5.24333 21.1183 3.14667 19.0217C1.04889 16.9239 0 14.3611 0 11.3333C0 8.30556 1.04889 5.74278 3.14667 3.645C5.24333 1.54833 7.80556 0.5 10.8333 0.5C13.8611 0.5 16.4239 1.54833 18.5217 3.645C20.6183 5.74278 21.6667 8.30556 21.6667 11.3333C21.6667 12.5556 21.4722 13.7083 21.0833 14.7917C20.6944 15.875 20.1667 16.8333 19.5 17.6667L30 28.1667L27.6667 30.5ZM10.8333 18.8333C12.9167 18.8333 14.6878 18.1044 16.1467 16.6467C17.6044 15.1878 18.3333 13.4167 18.3333 11.3333C18.3333 9.25 17.6044 7.47889 16.1467 6.02C14.6878 4.56222 12.9167 3.83333 10.8333 3.83333C8.75 3.83333 6.97889 4.56222 5.52 6.02C4.06222 7.47889 3.33333 9.25 3.33333 11.3333C3.33333 13.4167 4.06222 15.1878 5.52 16.6467C6.97889 18.1044 8.75 18.8333 10.8333 18.8333Z"
                fill="#0146B1"
              />
            </svg>
            <span>Search & Filter</span>
          </button>
        </div>
      </div>
    </section>
    <!-- end-search-form-section -->

    <!-- start-related-job-section -->

    <section class="related-job-section">
      <div class="container">
        <job-item-card
          v-for="job in jobs"
          :job="job"
          :key="job.id"
          ></job-item-card>

        <b-pagination
          :total-rows="total_count"
          :per-page="20"
          v-model="currentPage"
          @change="clickHandler"
          align="fill"
          pills
          size="lg"
        ></b-pagination>
      </div>
    </section>
    <footer-section></footer-section>
  </div>
</template>

<script>
import FooterSection from "@/components/FooterSection.vue";
import JobItemCard from "@/components/JobItemCard.vue";
import NavBar from "@/components/NavBar.vue";

function getMinExperience(experience_level) {
  return { "No Experience": 0, "1-3 Years": 1, "4-5 Years": 4, "6++": 6 }[
    experience_level
  ];
}
function getMaxExperience(experience_level) {
  return { "No Experience": 0, "1-3 Years": 3, "4-5 Years": 5, "6++": 50 }[
    experience_level
  ];
}
function getLimitDatePosted(date_posted) {
  const time = {
    "Last 24 Hours": new Date().setDate(new Date().getDate() - 1),
    "Last 3 Days": new Date().setDate(new Date().getDate() - 3),
    "Last 7 Days": new Date().setDate(new Date().getDate() - 7),
    "Last 14 Days": new Date().setDate(new Date().getDate() - 14),
    "Last 30 Days": new Date().setDate(new Date().getDate() - 30),
    "Last 60 Days": new Date().setDate(new Date().getDate() - 60),
    "Last 90 Days": new Date().setDate(new Date().getDate() - 90),
  }[date_posted];
  if (time) {
    return new Date(time).toISOString();
  }
  return undefined;
}

function getAPIFilters(query) {
  return {
    title__icontains: query.job_company || undefined,
    company__icontains: query.job_company || undefined,
    location__icontains: query.location || undefined,
    minimum_experience__gte: getMinExperience(query.experience_level) || 0,
    minimum_experience__lte: getMaxExperience(query.experience_level) || 50,
    date_posted__gte: getLimitDatePosted(query.date_posted) || undefined,
    // CONTRACT TYPE, DEGREE, SKILL HAS NO DEFINED FILTER IN API
  };
}

export default {
  components: { FooterSection, NavBar, JobItemCard },
  computed: {
    jobs: function () {
      return (
        this.$store.getters.getJobs
      );
    },
    total_count: function () {
      return this.$store.getters.jobs_count || 800;
    },
  },
  data() {
    return {
      currentPage: 1,
      filters: {
        job_company: "",
        location: "",
        experience_level: "",
        contract_type: "",
        degree: "",
        date_posted: "",
        skills: "",
        roles: "",
      },
    };
  },
  mounted() {
    this.currentPage = this.$route.query.page || 1;
    this.filters.job_company = this.$route.query.job_company || undefined;
    this.filters.location = this.$route.query.location || undefined;
    this.filters.experience_level = this.$route.query.experience_level || "";
    this.filters.contract_type = this.$route.query.contract_type || "";
    this.filters.degree = this.$route.query.degree || "";
    this.filters.date_posted = this.$route.query.date_posted || "";
    this.filters.skills = this.$route.query.skills || "";
    this.filters.roles = this.$route.query.roles || "";
    this.applyFilters();
  },
  methods: {
    clickHandler: function (page) {
      this.$router.push({ query: { page: page } });
      this.$store.dispatch("loadJobs", { page });
      window.scrollTo(0, 0);
    },
    applyFilters: function () {
      this.$store.dispatch("loadJobs", {
        page: 1,
        filters: getAPIFilters(this.filters),
      });
    },
  },
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/
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
  text-decoration: underline;
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
.hero-row > *:nth-child(1) {
  -ms-grid-row: 1;
  -ms-grid-column: 1;
}
.hero-row > *:nth-child(2) {
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
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#0d57cb),
    to(#0141a4)
  );
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
}

.related-job-section {
  padding: 1rem 0;
}
.field-wapper {
  position: relative;
}
.scroll-bar {
  position: absolute;
  right: 0;
  width: 1.2rem;
  height: 100%;
  border: 0.1rem solid #0146b1;
  padding-right: 1rem;
  z-index: 99;
}
.scroll-bar div {
  position: absolute;
  top: 0;
  width: 50%;
  height: 40%;
  background: #0146b1;
  left: 50%;
  top: 2%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 1rem;
  cursor: all-scroll;
}
.search-from .search-fields {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4rem;
  background: #fff;
  padding: 0 2rem;
  height: 6rem;
  margin: 0.5rem;
  position: relative;
}
.search-from .search-fields input,
.search-from .search-fields select {
  height: 100%;
  background: transparent;
  border: 0;
  outline: 0;
  padding: 0.7rem 2rem;
  color: #9a9dad;
  font-weight: 600;
  border: 0;
  outline: 0;
}

.job-pagination {
  width: 90%;
  margin: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
  gap: 3rem;
  margin-bottom: 4rem;
}
.pagination-btn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 2rem;
}
.pagination-btn div {
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  border-radius: 50%;
  border: 0.2rem solid #000000;
  font-size: 2rem;
  cursor: pointer;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
}
.filter-btn {
  padding: 2rem 10rem;
}
.pagination-btn div:hover {
  background: #000000;
  color: #fff;
}
.job-company {
  width: 32rem;
}
.Location {
  width: 15rem;
}
.date-post {
  width: 19rem;
}
.skill {
  width: 16.5rem;
}
.degree {
  width: 20rem;
}
.experience {
  width: 25rem;
}
.job-type {
  width: 18rem;
}

/* custom select */
.custom-select {
  position: relative;
}

.select-selected {
  background-color: #fff;
  border-radius: 3rem;
  padding: 0 2rem;
  height: 6rem;
}

/* Style the arrow inside the select element: */
.select-selected:after {
  position: absolute;
  content: "";
  top: 50%;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: rgba(0, 0, 0, 0.4) transparent transparent transparent;
}

/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent rgba(0, 0, 0, 0.4) transparent;
  top: 35%;
}
.select-selected.select-arrow-active {
  border-radius: 3rem 3rem 0 0;
}
.select-items div,
.select-selected {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: 0.3s;
  padding: 0.7rem 2rem;
  color: #9a9dad;
  font-weight: 600;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
}

/* Style items (options): */
.select-items {
  position: absolute;
  background-color: #fff;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}
.select-items div:hover {
  background: rgba(128, 128, 128, 0.177);
}
/* Hide the items when the select box is closed: */
.select-hide {
  display: none;
}
</style>
