<template>
  <div class="body">
    <nav-bar></nav-bar>
    <div class="hero-section">
      <div class="hero-row">
        <div class="hero-left-part contact-hero-left-part">
          <h1 class="hero-heading"><span>Get</span> in Touch</h1>
          <p class="desc-white pt-5 pb-5">
            Start working with Jobcy that can provide everything you need to
            generate awareness, drive traffic, connect
          </p>
          <form
            method="post"
            onsubmit="return validateForm()"
            name="myForm"
            id="myForm"
            class="contact-frm"
            data-aos="fade-left"
          >
            <div class="field-colume inner-flex inner-flex-half">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div class="field-colume inner-flex">
              <input
                type="email"
                id="emaiol"
                name="email"
                placeholder="Enter your email"
              />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
              />
            </div>

            <div class="field-colume inner-flex align-items-center">
              <textarea
                style="border-width: 5px"
                name="comments"
                id="comments"
                placeholder="Type here your message"
              ></textarea>
              <div class="field-colume submit-btn">
                <button type="submit" id="submit" name="submit">Send</button>
              </div>
            </div>
          </form>
        </div>
        <div class="hero-right-part contact-hero-right-part">
          <div class="hero-imags">
            <img
              class="hero-imags1"
              src="/static/new/media/img/contact-banner.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <!-- end-hero-section -->

    <section class="search-job-section">
      <div class="container">
        <h2 class="section-heading"><span>Ways</span> to contact us</h2>
        <ul class="list-with-icon">
          <li>
            <span>
              <svg
                viewBox="0 0 54 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.5 0.25H4.5C3.50544 0.25 2.55161 0.645088 1.84835 1.34835C1.14509 2.05161 0.75 3.00544 0.75 4V34C0.75 34.9946 1.14509 35.9484 1.84835 36.6516C2.55161 37.3549 3.50544 37.75 4.5 37.75H49.5C50.4946 37.75 51.4484 37.3549 52.1516 36.6516C52.8549 35.9484 53.25 34.9946 53.25 34V4C53.25 3.00544 52.8549 2.05161 52.1516 1.34835C51.4484 0.645088 50.4946 0.25 49.5 0.25ZM45.375 4L27 16.7125L8.625 4H45.375ZM4.5 34V5.70625L25.9313 20.5375C26.2451 20.7552 26.618 20.8719 27 20.8719C27.382 20.8719 27.7549 20.7552 28.0687 20.5375L49.5 5.70625V34H4.5Z"
                  fill="#0146B1"
                />
              </svg>
            </span>
            <a href=""> contactus@Jobcy.com</a>
          </li>
          <li>
            <span>
              <svg viewBox="0 0 45 46" fill="none">
                <path
                  d="M2.625 45.5C1.875 45.5 1.25 45.25 0.75 44.75C0.25 44.25 0 43.625 0 42.875V32.75C0 32.1667 0.1875 31.6558 0.5625 31.2175C0.9375 30.7808 1.41667 30.5 2 30.375L10.625 28.625C11.2083 28.5417 11.8025 28.5933 12.4075 28.78C13.0108 28.9683 13.5 29.25 13.875 29.625L19.75 35.5C22.9167 33.5833 25.8233 31.3125 28.47 28.6875C31.115 26.0625 33.3125 23.25 35.0625 20.25L29 14.125C28.625 13.75 28.385 13.3225 28.28 12.8425C28.1767 12.3642 28.1667 11.8333 28.25 11.25L29.875 2.5C29.9583 1.91667 30.2292 1.4375 30.6875 1.0625C31.1458 0.6875 31.6667 0.5 32.25 0.5H42.375C43.125 0.5 43.75 0.75 44.25 1.25C44.75 1.75 45 2.375 45 3.125C45 8.5 43.8017 13.7392 41.405 18.8425C39.01 23.9475 35.8433 28.4683 31.905 32.405C27.9683 36.3433 23.4483 39.51 18.345 41.905C13.24 44.3017 8 45.5 2.625 45.5ZM37.4375 15.5C38.1458 13.875 38.6875 12.2292 39.0625 10.5625C39.4375 8.89583 39.7292 7.20833 39.9375 5.5H34.375L33.3125 11.375L37.4375 15.5ZM15.0625 37.875L10.875 33.6875L5 34.875V40.375C6.70833 40.25 8.40667 39.9792 10.095 39.5625C11.7817 39.1458 13.4375 38.5833 15.0625 37.875Z"
                  fill="#0146B1"
                />
              </svg>
            </span>
            <a href=""> (+245) 223 1245</a>
          </li>
        </ul>
        <h2 class="section-heading mt-5 pt-5"><span>Where</span> are we</h2>
        <ul class="list-with-icon">
          <li>
            <span>
              <svg viewBox="0 0 40 50" fill="none">
                <path
                  d="M20 25C21.375 25 22.5525 24.51 23.5325 23.53C24.5108 22.5517 25 21.375 25 20C25 18.625 24.5108 17.4475 23.5325 16.4675C22.5525 15.4892 21.375 15 20 15C18.625 15 17.4483 15.4892 16.47 16.4675C15.49 17.4475 15 18.625 15 20C15 21.375 15.49 22.5517 16.47 23.53C17.4483 24.51 18.625 25 20 25ZM20 43.375C25.0833 38.7083 28.8542 34.4683 31.3125 30.655C33.7708 26.8433 35 23.4583 35 20.5C35 15.9583 33.5517 12.2392 30.655 9.3425C27.76 6.4475 24.2083 5 20 5C15.7917 5 12.2392 6.4475 9.3425 9.3425C6.4475 12.2392 5 15.9583 5 20.5C5 23.4583 6.22917 26.8433 8.6875 30.655C11.1458 34.4683 14.9167 38.7083 20 43.375ZM20 50C13.2917 44.2917 8.28167 38.9892 4.97 34.0925C1.65667 29.1975 0 24.6667 0 20.5C0 14.25 2.01083 9.27083 6.0325 5.5625C10.0525 1.85417 14.7083 0 20 0C25.2917 0 29.9475 1.85417 33.9675 5.5625C37.9892 9.27083 40 14.25 40 20.5C40 24.6667 38.3442 29.1975 35.0325 34.0925C31.7192 38.9892 26.7083 44.2917 20 50Z"
                  fill="#0146B1"
                />
              </svg>
            </span>
            <a href=""> 2453 Clinton StreetLittle Rock, California, USA</a>
          </li>
        </ul>
        <img
          class="img-map mt-5 mb-5"
          src="/static/new/media/img/map.png"
          alt=""
        />
      </div>
    </section>
    <footer-section></footer-section>
  </div>
</template>
  
  <script>
import NavBar from "@/components/NavBar.vue";
import FooterSection from "@/components/FooterSection.vue";
export default {
  components: { NavBar, FooterSection },
};
</script>
  
  <style scoped>
.body {
  font-size: 1.8rem;
  background: #f8f5ee;
}
.contact-hero-left-part {
  padding: 7rem 5rem 8rem 8rem;
}
.contact-frm {
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 3rem;
}
.contact-frm .field-colume.inner-flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  gap: 1.5rem;
}
.inner-flex-half {
  -ms-flex-preferred-size: 50% !important;
  flex-basis: 50% !important;
  margin-right: auto;
}
.contact-frm .field-colume {
  -webkit-box-flex: 100%;
  -ms-flex: 100% 0;
  flex: 100% 0;
}
.contact-frm .field-colume input,
.contact-frm .field-colume textarea {
  width: 100%;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  outline: 0;
  background: rgba(53, 219, 255, 0.1);
  border: 0.3rem solid rgba(255, 255, 255, 0.3);
  border-radius: 3rem;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  resize: none;
  color: #fff;
}
.contact-frm .field-colume input:focus,
.contact-frm .field-colume textarea:focus {
  border-color: #0146b1;
}
.contact-frm .field-colume textarea {
  height: 10rem;
}

.contact-frm .submit-btn button {
  width: 23rem;
  height: 6rem;
  text-align: center;
  border-radius: 4rem;
  background: #b3fd4c;
  border: 0;
  color: #000000;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  font-weight: 500;
}
.contact-frm .submit-btn button:hover {
  opacity: 0.7;
}

.contact-hero-right-part .hero-imags1 {
  left: 0;
  width: 100%;
  height: auto;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.img-map {
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
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