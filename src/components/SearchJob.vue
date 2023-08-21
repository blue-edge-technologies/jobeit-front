<template>
  <div>
    <section class="search-job-section">
      <div class="container">
        <h2 class="section-heading"><span>Search </span> Jobs Database</h2>
        <p class="desc">
          Make use of our jobs databases <br />
          We'll quickly provide you with the right jobs for you
        </p>
        <router-link to="/job-search/" class="common-btn">
          <span>Click to search</span>
          <svg viewBox="0 0 40 40" fill="none">
            <path
              d="M23.8844 38.9238C23.3708 38.2063 23.1242 37.3393 23.1448 36.3229C23.167 35.3064 23.435 34.4395 23.9486 33.722L31.2038 23.5874H2.56822C1.84056 23.5874 1.23018 23.243 0.737079 22.5543C0.245693 21.8679 0 21.0164 0 20C0 18.9836 0.245693 18.1309 0.737079 17.4422C1.23018 16.7558 1.84056 16.4126 2.56822 16.4126H31.2038L23.8844 6.18834C23.3708 5.47085 23.114 4.61823 23.114 3.63049C23.114 2.64514 23.3708 1.79372 23.8844 1.07623C24.3981 0.358743 25.0085 0 25.7156 0C26.421 0 27.0305 0.358743 27.5441 1.07623L39.2937 17.4888C39.5506 17.8475 39.7329 18.2362 39.8408 18.6547C39.9469 19.0732 40 19.5217 40 20C40 20.4783 39.9469 20.9268 39.8408 21.3453C39.7329 21.7638 39.5506 22.1525 39.2937 22.5112L27.4799 39.0134C27.0091 39.6711 26.421 40 25.7156 40C25.0085 40 24.3981 39.6413 23.8844 38.9238Z"
              fill="#0146B1"
            />
          </svg>
        </router-link>
      </div>
    </section>
    <!-- end-search-job-section -->

    <!-- start-new-job-section -->
    <section class="search-job-section">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h2 class="section-heading"><span>New & Random </span> Jobs</h2>
            <p class="desc">
              Post a job to tell us about your project We'll quickly match you
              with the right freelancers
            </p>
          </div>
          <div class="col-md-4">
            <div class="arrow-btns">
              <div class="arrow-btn prev" @click="prevSlide">
                <svg
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4896 0.834084C12.8876 1.39014 13.0787 2.06204 13.0628 2.84978C13.0455 3.63752 12.8379 4.30942 12.4398 4.86547L6.81702 12.7197L29.0096 12.7197C29.5736 12.7197 30.0466 12.9866 30.4288 13.5205C30.8096 14.0524 31 14.7123 31 15.5C31 16.2877 30.8096 16.9485 30.4288 17.4823C30.0466 18.0143 29.5736 18.2803 29.0096 18.2803L6.81702 18.2803L12.4896 26.204C12.8876 26.7601 13.0867 27.4209 13.0867 28.1864C13.0867 28.95 12.8876 29.6099 12.4896 30.1659C12.0915 30.722 11.6185 31 11.0704 31C10.5237 31 10.0514 30.722 9.65329 30.1659L0.547354 17.4462C0.348318 17.1682 0.206999 16.867 0.123404 16.5426C0.0411358 16.2182 0 15.8707 0 15.5C0 15.1293 0.0411358 14.7818 0.123404 14.4574C0.206999 14.133 0.348318 13.8318 0.547354 13.5538L9.70305 0.764578C10.068 0.254862 10.5237 0 11.0704 0C11.6185 0 12.0915 0.27803 12.4896 0.834084Z"
                  />
                </svg>
              </div>
              <div class="arrow-btn next" @click="nextSlide">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5104 30.1659C18.1124 29.6099 17.9213 28.938 17.9372 28.1502C17.9545 27.3625 18.1621 26.6906 18.5602 26.1345L24.183 18.2803H1.99037C1.42643 18.2803 0.953387 18.0134 0.571236 17.4795C0.190412 16.9476 0 16.2877 0 15.5C0 14.7123 0.190412 14.0515 0.571236 13.5177C0.953387 12.9857 1.42643 12.7197 1.99037 12.7197H24.183L18.5104 4.79596C18.1124 4.23991 17.9133 3.57913 17.9133 2.81363C17.9133 2.04998 18.1124 1.39013 18.5104 0.83408C18.9085 0.278026 19.3815 0 19.9296 0C20.4763 0 20.9486 0.278026 21.3467 0.83408L30.4526 13.5538C30.6517 13.8318 30.793 14.133 30.8766 14.4574C30.9589 14.7818 31 15.1293 31 15.5C31 15.8707 30.9589 16.2182 30.8766 16.5426C30.793 16.867 30.6517 17.1682 30.4526 17.4462L21.2969 30.2354C20.932 30.7451 20.4763 31 19.9296 31C19.3815 31 18.9085 30.722 18.5104 30.1659Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="slider-inner mt-5">
          <div id="owl-demo" class="owl-carousel owl-theme">
            <Carousel autoplay :perPage="3" loop navigationEnabled v-model="currentSlide" :scrollPerPage="false">
              <Slide v-for="job in jobs" :key="job.id">
                <div class="item">
                  <h2>{{ job?.title || "Title" }}</h2>
                  <div class="job-adddress">
                    <svg viewBox="0 0 27 34" fill="none">
                      <path
                        d="M13.3333 16.6667C14.25 16.6667 15.035 16.34 15.6883 15.6867C16.3406 15.0344 16.6667 14.25 16.6667 13.3333C16.6667 12.4167 16.3406 11.6317 15.6883 10.9783C15.035 10.3261 14.25 10 13.3333 10C12.4167 10 11.6322 10.3261 10.98 10.9783C10.3267 11.6317 10 12.4167 10 13.3333C10 14.25 10.3267 15.0344 10.98 15.6867C11.6322 16.34 12.4167 16.6667 13.3333 16.6667ZM13.3333 28.9167C16.7222 25.8056 19.2361 22.9789 20.875 20.4367C22.5139 17.8956 23.3333 15.6389 23.3333 13.6667C23.3333 10.6389 22.3678 8.15944 20.4367 6.22833C18.5067 4.29833 16.1389 3.33333 13.3333 3.33333C10.5278 3.33333 8.15944 4.29833 6.22833 6.22833C4.29833 8.15944 3.33333 10.6389 3.33333 13.6667C3.33333 15.6389 4.15278 17.8956 5.79167 20.4367C7.43056 22.9789 9.94444 25.8056 13.3333 28.9167ZM13.3333 33.3333C8.86111 29.5278 5.52111 25.9928 3.31333 22.7283C1.10444 19.465 0 16.4444 0 13.6667C0 9.5 1.34056 6.18056 4.02167 3.70833C6.70167 1.23611 9.80556 0 13.3333 0C16.8611 0 19.965 1.23611 22.645 3.70833C25.3261 6.18056 26.6667 9.5 26.6667 13.6667C26.6667 16.4444 25.5628 19.465 23.355 22.7283C21.1461 25.9928 17.8056 29.5278 13.3333 33.3333Z"
                      ></path>
                    </svg>
                    <span>{{ job?.location || "Location" }}</span>
                  </div>
                  <div class="job-tags">
                    <a href="">{{ job?.contract_type1 || "Contract" }}</a>
                  </div>
                  <div class="company-logo">
                    <img :src="job?.logo" :alt="job?.company" />
                    <span>{{ job?.company || "Company" }}</span>
                  </div>
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
    <section class="how-work-section">
      <div class="container">
        <h2 class="section-heading"><span>How</span> It Works</h2>

        <div class="row">
          <div class="col-md-6">
            <div class="work-inner">
              <div class="work-count">
                <span>1</span>
              </div>
              <div class="work-test">
                <h3>Register an account</h3>
                <p class="desc">
                  There are many variations of passages of avaibookmark-label,
                  but the majority alteration in some form
                </p>
              </div>
            </div>
            <div class="work-inner">
              <div class="work-count">
                <span>2</span>
              </div>
              <div class="work-test">
                <h3>Find your job</h3>
                <p class="desc">
                  There are many variations of passages of avaibookmark-label,
                  but the majority alteration in some form
                </p>
              </div>
            </div>
            <div class="work-inner">
              <div class="work-count">
                <span>3</span>
              </div>
              <div class="work-test last-work">
                <h3>Apply for job</h3>
                <p class="desc">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 text-center">
            <img class="img-work" src="../assets/img/work-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- end-how-work-section -->

    <!-- start-search-job-section -->
    <section class="search-job-section">
      <div class="container">
        <h2 class="section-heading">
          <span>Browse</span> Our 5, 000 + Latest Jobs
        </h2>
        <p class="desc">
          Post a job to tell us about your project <br />
          We'll quickly match you with the right freelancers
        </p>
        <router-link to="/job-search" class="common-btn">
          <span>Start Now</span>
        </router-link>
      </div>
    </section>
    <!-- end-search-job-section -->
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  mounted() {
    this.$store.dispatch("loadJobs", { page: 1 });
  },
  computed: {
    jobs() {
      const allJobs = this.$store.getters.getJobs;
      if (Array.isArray(allJobs)) {
        return allJobs.slice(0, 5);
      }
      return [];
    },
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.jobs.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.jobs.length) % this.jobs.length;
    },
  },
};
</script>

<style scoped>
.search-job-section {
  background-color: #f8f5ee;
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
.search-job-section {
  background-color: #f8f5ee;
}
/* new-job-section */
.arrow-btns {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
  gap: 2rem;
  margin-top: 3rem;
}
.arrow-btns .arrow-btn {
  width: 4rem;
  height: 4rem;
  background: #fff;
  border-radius: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: 0.1s;
  -o-transition: 0.1s;
  transition: 0.1s;
  border: 0.2rem solid #000000;
}
.arrow-btns .arrow-btn svg {
  width: 1.5rem;
  fill: #000000;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  background: transparent;
}
.arrow-btns .arrow-btn:hover,
.arrow-btns .arrow-btn:hover svg {
  background: #000000;
  fill: #fff;
}
/* jos slider */
#owl-demo .item {
  background: #fff;
  padding: 5rem 2rem;
  border-radius: 3rem;
  -webkit-transition: 0.1s;
  -o-transition: 0.1s;
  transition: 0.1s;
  margin: 1.5rem;
  -webkit-box-shadow: 0px 0px 12px 0px rgb(0 0 0 / 10%);
  box-shadow: 0px 0px 12px 0px rgb(0 0 0 / 10%);
}
#owl-demo .item:hover {
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

#owl-demo .item h2 {
  font-size: 2.5rem;
  font-weight: 700;
}
#owl-demo .item .job-adddress {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 2rem;
  margin: 2.5rem 0;
}
#owl-demo .item .job-adddress svg {
  width: 2rem;
  fill: #0d57cb;
}
#owl-demo .item:hover svg {
  fill: #fff;
}
#owl-demo .item .job-adddress span {
  font-weight: 400;
  font-size: 2rem;
}
#owl-demo .item .job-tags {
  margin: 4.5rem 0;
  display: block;
}

#owl-demo .item:hover .job-tags a {
  color: #fff;
}

#owl-demo .item .company-logo img {
  width: 5rem;
}
#owl-demo .item .company-logo span {
  font-size: 2rem;
  font-weight: 600;
  margin-left: 1rem;
}

/* how-work-section */
.how-work-section {
  background: #f8f5ee;
}
.work-inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  margin-bottom: 4rem;
  gap: 2rem;
}

.work-inner .work-count span {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: rgba(53, 219, 255, 0.1);
  border: 0.6rem solid rgba(255, 255, 255, 0.3);
  display: block;
  font-size: 2.5rem;
  font-weight: 600;
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

.work-inner .work-test {
  position: relative;
}
.work-inner .work-test::after {
  content: "";
  position: absolute;
  top: 6.9rem;
  left: -4.9rem;
  height: 60%;
  width: 0.3rem;
  border-radius: 2rem;
  background: #b3fd4c;
}
.work-inner .work-test.last-work::after {
  height: 0;
}
.work-inner .work-test h3 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
}
.img-work {
  width: 75%;
  margin: auto;
}

.company-search-field {
  position: relative !important;
}
.company-search-field::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 1px;
  height: 60%;
  background: #0141a4;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  border-radius: 5rem;
  right: 0;
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
.job-tags a {
  padding: 1.5rem 2rem;
  background: rgba(53, 219, 255, 0.1);
  border: 0.3rem solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(8rem);
  backdrop-filter: blur(8rem);
  border-radius: 4rem;
  margin: 5rem 0;
}
</style>
