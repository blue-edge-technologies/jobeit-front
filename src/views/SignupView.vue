<template>
  <div class="sign">
    <!-- staer-hero-section -->
    <div class="sign-up-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 dn-sm">
            <div class="sign-left text-center">
              <img
                src="../assets/img/sign-up.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="sign-right">
              <h2 class="banner-heading mb-5 pb-3">
                Let's Get <span>Started</span>
              </h2>
              <template v-if="error">
                <div class="alert alert-danger" role="alert">
                  {{ error }}
                </div>
              </template>
              <div
                method="POST"
                class="auth-form contact-frm"
                data-aos="fade-left"
              >
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  value="HPHTG5HDGi2HiDSzrnX24BgozB5g699eSVDOGQ9mT0UrW3bWn8vTguVtGCdyW3mW"
                />

                <div class="field-colume">
                  <input
                    v-model="email"
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Email"
                    maxlength="100"
                    autofocus
                    required
                    id="id_username"
                  />
                  <!-- <input type="text" placeholder="Username"> -->
                </div>
                <div class="field-colume inner-flex">
                  <input
                    v-model="first_name"
                    type="text"
                    name="first_name"
                    class="form-control"
                    placeholder="First Name"
                    maxlength="100"
                    required
                    id="id_first_name"
                  />
                  <input
                    v-model="last_name"
                    type="text"
                    name="last_name"
                    class="form-control"
                    placeholder="Last Name"
                    maxlength="100"
                    required
                    id="id_last_name"
                  />
                  <!-- <input type="text" placeholder="First Name">
                                <input type="text" placeholder="Last Name"> -->
                </div>

                <div class="field-colume inner-flex">
                  <input
                    v-model="password"
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="Password"
                    maxlength="200"
                    required
                    id="id_password1"
                  />

                  <!-- <input type="password" placeholder="Password"> -->
                </div>
                <div>
                  <ul></ul>
                </div>

                <div class="field-colume submit-btn">
                  <button @click="signup">Sign Up</button>
                </div>
              </div>
              <p class="desc-white mt-5 pt-3 fs-3">
                Already a member?
                <router-link class="form-link" to="/login">Log in</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end-hero-section -->
  </div>
</template>
<script>
export default {
  name: "SignupView",
  data() {
    return {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      error: "",
    };
  },
  methods: {
    signup() {
      this.$store
        .dispatch("signup", {
          email: this.email,
          first_name: this.first_name,
          last_name: this.last_name,
          password: this.password,
        })
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          const responseData = error.response.data;
          let errorString = "";
          for (const key in responseData) {
            errorString += `${key}: ${responseData[key][0]}\n`;
          }
          this.error =
            error?.response?.data?.error ||
            errorString;
        });
    },
  },
};
</script>
  <style scoped>
.desc-white {
  font-size: 2rem;
  line-height: 164.5%;
  color: #fff;
}
.sign {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100vh;
}
.sign-up-section {
  overflow: hidden;
}
.signup-img {
  width: 100%;
}
.sign-left {
  background: #b3fd4c;
  border-radius: 3rem 0 0 3rem;
  height: 100%;
  position: relative;
}
.sign-left img {
  width: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.sign-right {
  background: #0146b1;
  border-radius: 0 3rem 3rem 0;
  padding: 5rem 2rem;
}
.sign-up-section .row {
  --bs-gutter-x: 0rem;
}
.form-link {
  margin-left: 1rem;
  color: #b3fd4c;
  text-decoration: underline;
}
.form-link:hover {
  color: #cdfa8d;
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
}

/* hero-section */

/* footer */

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