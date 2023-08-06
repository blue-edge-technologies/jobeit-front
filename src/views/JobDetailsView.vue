<template>
  <div class="body">
    <nav-bar></nav-bar>
    <section class="job-description-section">
      <div class="container">
        <div class="job-desc-banner-heading pb-4">
          <h2 class="bold-banner-heading">{{jobDetails.title}}</h2>
          <div>
            <svg width="30" height="40" viewBox="0 0 46 50" fill="none">
              <path
                d="M38 50C35.9167 50 34.1458 49.2708 32.6875 47.8125C31.2292 46.3542 30.5 44.5833 30.5 42.5C30.5 42.2083 30.5208 41.9058 30.5625 41.5925C30.6042 41.2792 30.6667 40.9983 30.75 40.75L13.125 30.5C12.4167 31.125 11.625 31.615 10.75 31.97C9.875 32.325 8.95833 32.5017 8 32.5C5.91667 32.5 4.14583 31.7708 2.6875 30.3125C1.22917 28.8542 0.5 27.0833 0.5 25C0.5 22.9167 1.22917 21.1458 2.6875 19.6875C4.14583 18.2292 5.91667 17.5 8 17.5C8.95833 17.5 9.875 17.6775 10.75 18.0325C11.625 18.3875 12.4167 18.8767 13.125 19.5L30.75 9.25C30.6667 9 30.6042 8.71917 30.5625 8.4075C30.5208 8.09583 30.5 7.79333 30.5 7.5C30.5 5.41667 31.2292 3.64583 32.6875 2.1875C34.1458 0.729167 35.9167 0 38 0C40.0833 0 41.8542 0.729167 43.3125 2.1875C44.7708 3.64583 45.5 5.41667 45.5 7.5C45.5 9.58333 44.7708 11.3542 43.3125 12.8125C41.8542 14.2708 40.0833 15 38 15C37.0417 15 36.125 14.8233 35.25 14.47C34.375 14.1167 33.5833 13.6267 32.875 13L15.25 23.25C15.3333 23.5 15.3958 23.7817 15.4375 24.095C15.4792 24.4083 15.5 24.71 15.5 25C15.5 25.2917 15.4792 25.5942 15.4375 25.9075C15.3958 26.2208 15.3333 26.5017 15.25 26.75L32.875 37C33.5833 36.375 34.375 35.8858 35.25 35.5325C36.125 35.1792 37.0417 35.0017 38 35C40.0833 35 41.8542 35.7292 43.3125 37.1875C44.7708 38.6458 45.5 40.4167 45.5 42.5C45.5 44.5833 44.7708 46.3542 43.3125 47.8125C41.8542 49.2708 40.0833 50 38 50ZM38 10C38.7083 10 39.3025 9.76 39.7825 9.28C40.2625 8.8 40.5017 8.20667 40.5 7.5C40.5 6.79167 40.26 6.1975 39.78 5.7175C39.3 5.2375 38.7067 4.99833 38 5C37.2917 5 36.6975 5.24 36.2175 5.72C35.7375 6.2 35.4983 6.79333 35.5 7.5C35.5 8.20833 35.74 8.8025 36.22 9.2825C36.7 9.7625 37.2933 10.0017 38 10ZM8 27.5C8.70833 27.5 9.3025 27.26 9.7825 26.78C10.2625 26.3 10.5017 25.7067 10.5 25C10.5 24.2917 10.26 23.6975 9.78 23.2175C9.3 22.7375 8.70667 22.4983 8 22.5C7.29167 22.5 6.6975 22.74 6.2175 23.22C5.7375 23.7 5.49833 24.2933 5.5 25C5.5 25.7083 5.74 26.3025 6.22 26.7825C6.7 27.2625 7.29333 27.5017 8 27.5ZM38 45C38.7083 45 39.3025 44.76 39.7825 44.28C40.2625 43.8 40.5017 43.2067 40.5 42.5C40.5 41.7917 40.26 41.1975 39.78 40.7175C39.3 40.2375 38.7067 39.9983 38 40C37.2917 40 36.6975 40.24 36.2175 40.72C35.7375 41.2 35.4983 41.7933 35.5 42.5C35.5 43.2083 35.74 43.8025 36.22 44.2825C36.7 44.7625 37.2933 45.0017 38 45Z"
                fill="#B3FD4C"
              />
            </svg>
          </div>
        </div>
        <template v-if="error">
          <div class="alert alert-danger" role="alert">
            {{ error }}
          </div>
        </template>
        <div class="d-flex gap-5 align-items-center my-3 flex-wrap">
          <img
            :src="jobDetails.logo"
            :alt="`${jobDetails.title} logo`"
          />
          <p class="desc-white">
            {{ jobDetails.company }}
          </p>
          <!-- <a class="squar-btn" href="">5 + open jobs</a> -->
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex gap-4 align-items-center">
            <svg width="20" viewBox="0 0 40 50" fill="none">
              <path
                d="M20 25C21.375 25 22.5525 24.51 23.5325 23.53C24.5108 22.5517 25 21.375 25 20C25 18.625 24.5108 17.4475 23.5325 16.4675C22.5525 15.4892 21.375 15 20 15C18.625 15 17.4483 15.4892 16.47 16.4675C15.49 17.4475 15 18.625 15 20C15 21.375 15.49 22.5517 16.47 23.53C17.4483 24.51 18.625 25 20 25ZM20 43.375C25.0833 38.7083 28.8542 34.4683 31.3125 30.655C33.7708 26.8433 35 23.4583 35 20.5C35 15.9583 33.5517 12.2392 30.655 9.3425C27.76 6.4475 24.2083 5 20 5C15.7917 5 12.2392 6.4475 9.3425 9.3425C6.4475 12.2392 5 15.9583 5 20.5C5 23.4583 6.22917 26.8433 8.6875 30.655C11.1458 34.4683 14.9167 38.7083 20 43.375ZM20 50C13.2917 44.2917 8.28167 38.9892 4.97 34.0925C1.65667 29.1975 0 24.6667 0 20.5C0 14.25 2.01083 9.27083 6.0325 5.5625C10.0525 1.85417 14.7083 0 20 0C25.2917 0 29.9475 1.85417 33.9675 5.5625C37.9892 9.27083 40 14.25 40 20.5C40 24.6667 38.3442 29.1975 35.0325 34.0925C31.7192 38.9892 26.7083 44.2917 20 50Z"
                fill="#b3fd4c"
              ></path>
            </svg>
            <p class="desc-white mt-3">{{ jobDetails.location }}</p>
          </div>
          <a
            :href="jobDetails.url_link"
            class="common-btn common-btn-jobdesc mt-5"
            >Apply now</a
          >
        </div>
        <div
          class="pt-3 d-flex align-items-center justify-content-between flex-wrap"
        >
          <div class="d-flex align-items-center gap-5">
            <a href="" class="transparent-btn transparent-btn-sm">{{ 
              jobDetails.contract_type1
              }}
              </a>  
          </div>
        </div>
      </div>
    </section>
    <!-- end-job-description-section -->

    <!-- start-section -->
    <section class="bottom-job-description-banner">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="d-flex gap-3">
              <svg
                class="mt-2"
                width="25"
                height="25"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M20 40C17.2222 40 14.62 39.4719 12.1933 38.4156C9.76667 37.3593 7.65556 35.9341 5.86 34.14C4.06444 32.343 2.63926 30.2318 1.58444 27.8067C0.52963 25.3815 0.00148148 22.7793 0 20C0 17.2222 0.528148 14.62 1.58444 12.1933C2.64074 9.76667 4.06593 7.65556 5.86 5.86C7.65704 4.06444 9.76815 2.63926 12.1933 1.58444C14.6185 0.52963 17.2207 0.00148148 20 0C23.037 0 25.917 0.648148 28.64 1.94444C31.363 3.24074 33.6681 5.07407 35.5556 7.44444V2.22222H40V15.5556H26.6667V11.1111H32.7778C31.2593 9.03704 29.3889 7.40741 27.1667 6.22222C24.9444 5.03704 22.5556 4.44444 20 4.44444C15.6667 4.44444 11.9904 5.95407 8.97111 8.97333C5.95185 11.9926 4.44296 15.6681 4.44444 20C4.44444 24.3333 5.95407 28.0096 8.97333 31.0289C11.9926 34.0481 15.6681 35.557 20 35.5556C23.8889 35.5556 27.2874 34.2963 30.1956 31.7778C33.1037 29.2593 34.8163 26.0741 35.3333 22.2222H39.8889C39.3333 27.2963 37.1578 31.5281 33.3622 34.9178C29.5667 38.3074 25.1126 40.0015 20 40ZM26.2222 29.3333L17.7778 20.8889V8.88889H22.2222V19.1111L29.3333 26.2222L26.2222 29.3333Z"
                  fill="#0146B1"
                />
              </svg>
              <p class="desc">Posted on: {{
                new Date(jobDetails.date_posted).toDateString()
              }} </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="d-flex gap-3 gap-3">
              <p class="desc">Rate:</p>
              <div class="review-star mb-2">
                <img src="/static/new/media/img/start.png" alt="" />
                <img src="/static/new/media/img/start.png" alt="" />
                <img src="/static/new/media/img/start.png" alt="" />
                <img src="/static/new/media/img/start.png" alt="" />
                <img src="/static/new/media/img/start.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end-section -->
    <!-- end-hero-section -->

    <!-- start-job-requirements-section -->

    <section class="bottom-job-description-banner">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="section-heading"><span>Job </span>Description</h2>
            <p class="desc">
              {{ jobDetails.description || "No description available" }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h2 class="section-heading"></h2>
            <p class="desc"></p>
          </div>
        </div>
      </div>
    </section>
    <section class="bottom-job-description-banner">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="section-heading"><span>Job </span>Requirements</h2>
            <p class="desc">
              {{ jobDetails.requirements || "Requirements unavailable" }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- end-job-requirements-section -->

    <!-- start-related-job-section -->
    <section class="related-job-section">
      <div class="container">
        <h2 class="section-heading"><span>Related</span> Jobs</h2>

        <job-item-card
          v-for="(job, index) in relatedJobs"
          :key="index"
          :job="job"
        ></job-item-card>

      </div>
    </section>
    <footer-section></footer-section>
  </div>
</template>

<script>
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";
import JobItemCard from "@/components/JobItemCard.vue";

export default {
  components: { FooterSection, NavBar, JobItemCard },
  created() {
    this.getJobsDetail();
  },
  methods: {
    getJobsDetail() {
      this.$store.dispatch("getJob", { slug: this.$route.params.slug }).catch(
        (error) => {
          this.error =
            error?.response?.data ||
            "Failed to get job details. Please try again.";
          alert(this.error);
        }
      );
    },
  },
  data() {
    return {
      error: "",
    };
  },
  computed: {
    jobDetails() {
      return (
        this.$store.getters.getJob || { title: "Loading", description: "" }
      );
    },
    relatedJobs() {
      // THIS DATA IS NOT RETURNED FROM THE API REQUEST
      return this.$store.state.getJobs;
    },
    isLoading() {
      return this.$store.state.isJobDetailLoading;
    },
  },
};
</script>

<style>
.body {
  font-size: 1.8rem;
  background: #f8f5ee;
}
.job-description-section {
  background: #0146b1;
}
.job-desc-banner-heading {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.squar-btn {
  padding: 0.7rem 2rem;
  background: #f8f5ee;
  text-decoration: none;
  color: #000000;
}
/* job-requirements-section */
.job-requirements-section {
  background: #b3fd4c;
  cursor: pointer;
}
.job-requirements-section .list-with-icon li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 0.5rem;
}
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
}
</style>
