<template>
  <div class="hero-section">
    <div class="hero-row hero-row-index">
      <div class="hero-left-part hero-left-part-index">
        <h1 class="hero-heading hero-pr-10">
          Find your dream jobs with <span>Jobcy</span>
        </h1>
        <form action="/job-search/">
          <div class="search-box">
            <div class="search-field company-search-field">
              <svg viewBox="0 0 34 33" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.3335 7.49992V4.16659H13.6668V7.49992H20.3335ZM3.66683 10.8333V29.1666H30.3335V10.8333H3.66683ZM30.3335 7.49992C32.1835 7.49992 33.6668 8.98325 33.6668 10.8333V29.1666C33.6668 31.0166 32.1835 32.4999 30.3335 32.4999H3.66683C1.81683 32.4999 0.333496 31.0166 0.333496 29.1666L0.350163 10.8333C0.350163 8.98325 1.81683 7.49992 3.66683 7.49992H10.3335V4.16659C10.3335 2.31659 11.8168 0.833252 13.6668 0.833252H20.3335C22.1835 0.833252 23.6668 2.31659 23.6668 4.16659V7.49992H30.3335Z"
                  fill="#0146B1"
                />
              </svg>
              <input
                type="text"
                name="job_company"
                class="filter-input-box"
                placeholder="Job, Company"
                id="id_job_company"
              />
            </div>
            <div class="search-field">
              <svg
                viewBox="0 0 27 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 16.6667C14.25 16.6667 15.035 16.34 15.6883 15.6867C16.3406 15.0344 16.6667 14.25 16.6667 13.3333C16.6667 12.4167 16.3406 11.6317 15.6883 10.9783C15.035 10.3261 14.25 10 13.3333 10C12.4167 10 11.6322 10.3261 10.98 10.9783C10.3267 11.6317 10 12.4167 10 13.3333C10 14.25 10.3267 15.0344 10.98 15.6867C11.6322 16.34 12.4167 16.6667 13.3333 16.6667ZM13.3333 28.9167C16.7222 25.8056 19.2361 22.9789 20.875 20.4367C22.5139 17.8956 23.3333 15.6389 23.3333 13.6667C23.3333 10.6389 22.3678 8.15944 20.4367 6.22833C18.5067 4.29833 16.1389 3.33333 13.3333 3.33333C10.5278 3.33333 8.15944 4.29833 6.22833 6.22833C4.29833 8.15944 3.33333 10.6389 3.33333 13.6667C3.33333 15.6389 4.15278 17.8956 5.79167 20.4367C7.43056 22.9789 9.94444 25.8056 13.3333 28.9167ZM13.3333 33.3333C8.86111 29.5278 5.52111 25.9928 3.31333 22.7283C1.10444 19.465 0 16.4444 0 13.6667C0 9.5 1.34056 6.18056 4.02167 3.70833C6.70167 1.23611 9.80556 0 13.3333 0C16.8611 0 19.965 1.23611 22.645 3.70833C25.3261 6.18056 26.6667 9.5 26.6667 13.6667C26.6667 16.4444 25.5628 19.465 23.355 22.7283C21.1461 25.9928 17.8056 29.5278 13.3333 33.3333Z"
                  fill="#0146B1"
                />
              </svg>
              <input
                type="text"
                name="location"
                class="filter-input-box"
                placeholder="Location"
                id="id_location"
              />
            </div>
            <div class="search-field dn-mobile">
              <button class="search-btn">
                <span>Find work </span>
                <svg
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.6667 30L17.1667 19.5C16.3333 20.1667 15.375 20.6944 14.2917 21.0833C13.2083 21.4722 12.0556 21.6667 10.8333 21.6667C7.80556 21.6667 5.24333 20.6183 3.14667 18.5217C1.04889 16.4239 0 13.8611 0 10.8333C0 7.80556 1.04889 5.24278 3.14667 3.145C5.24333 1.04833 7.80556 0 10.8333 0C13.8611 0 16.4239 1.04833 18.5217 3.145C20.6183 5.24278 21.6667 7.80556 21.6667 10.8333C21.6667 12.0556 21.4722 13.2083 21.0833 14.2917C20.6944 15.375 20.1667 16.3333 19.5 17.1667L30 27.6667L27.6667 30ZM10.8333 18.3333C12.9167 18.3333 14.6878 17.6044 16.1467 16.1467C17.6044 14.6878 18.3333 12.9167 18.3333 10.8333C18.3333 8.75 17.6044 6.97889 16.1467 5.52C14.6878 4.06222 12.9167 3.33333 10.8333 3.33333C8.75 3.33333 6.97889 4.06222 5.52 5.52C4.06222 6.97889 3.33333 8.75 3.33333 10.8333C3.33333 12.9167 4.06222 14.6878 5.52 16.1467C6.97889 17.6044 8.75 18.3333 10.8333 18.3333Z"
                    fill="#0146B1"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button class="mobile-submit-btn d-none df-mobile" type="submit">
            <span>Find work </span>
            <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
              <path
                d="M27.6667 30L17.1667 19.5C16.3333 20.1667 15.375 20.6944 14.2917 21.0833C13.2083 21.4722 12.0556 21.6667 10.8333 21.6667C7.80556 21.6667 5.24333 20.6183 3.14667 18.5217C1.04889 16.4239 0 13.8611 0 10.8333C0 7.80556 1.04889 5.24278 3.14667 3.145C5.24333 1.04833 7.80556 0 10.8333 0C13.8611 0 16.4239 1.04833 18.5217 3.145C20.6183 5.24278 21.6667 7.80556 21.6667 10.8333C21.6667 12.0556 21.4722 13.2083 21.0833 14.2917C20.6944 15.375 20.1667 16.3333 19.5 17.1667L30 27.6667L27.6667 30ZM10.8333 18.3333C12.9167 18.3333 14.6878 17.6044 16.1467 16.1467C17.6044 14.6878 18.3333 12.9167 18.3333 10.8333C18.3333 8.75 17.6044 6.97889 16.1467 5.52C14.6878 4.06222 12.9167 3.33333 10.8333 3.33333C8.75 3.33333 6.97889 4.06222 5.52 5.52C4.06222 6.97889 3.33333 8.75 3.33333 10.8333C3.33333 12.9167 4.06222 14.6878 5.52 16.1467C6.97889 17.6044 8.75 18.3333 10.8333 18.3333Z"
                fill="#0146B1"
              />
            </svg>
          </button>
        </form>
        <div class="hero-show hero-show1">
          <span style="color: white">
            Different <br />
            industries</span
          >
        </div>
        <div class="hero-show hero-show2">
          <span style="color: white"> Trackable <br />resumes </span>
        </div>
        <div class="hero-show hero-show3">
          <span style="color: white">
            Enrich your <br />
            applications</span
          >
        </div>
      </div>
      <div class="hero-right-part">
        <div class="hero-imags">
          <img
            class="hero-imags1"
            src="/static/new/media/img/hero-img1.png"
            alt=""
          />
          <img
            class="hero-imags2"
            src="/static/new/media/img/hero-img2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero-show {
  width: 18rem;
  height: 9rem;
  background: rgba(53, 219, 255, 0.1);
  border: 0.7rem solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(84.5593px);
  backdrop-filter: blur(84.5593px);
  border-radius: 4.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: absolute;
}
.hero-show1 {
  bottom: 4rem;
  left: 14rem;
}
.hero-pr-10 {
  padding-right: 10rem;
}
.hero-show a {
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.2rem;
}
.hero-show2 {
  right: -4rem;
  z-index: 9;
  bottom: -4rem;
  height: 11rem;
}
.hero-show3 {
  right: -7rem;
  top: 10rem;
  z-index: 9;
  height: 12rem;
}
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
.mobile-submit-btn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 25rem;
  margin-left: auto;
  height: 7rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 2rem;
  background: #b3fd4c;
  border: 0;
  border-radius: 4rem;
  font-size: 1.8rem;
  font-weight: 500;
}
</style>