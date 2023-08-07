<script>
const PAGE_STATUS = Object.freeze({
  RESET_PASSWORD_FORM: 1,
  RESETTING_PASSWORD: 2,
  PASSWORD_RESET_REDIRECTING: 3,
  PASSWORD_RESET_FAILED: 4,
});

export default {
  name: "resetPasswordCallback",
  data() {
    return {
      newPassword: "",
      newPassword2: "",
      uid: null,
      token: null,
      formSubmitted: false,
      PAGE_STATUS,
      error: "",
    };
  },
  mounted() {
    const uid = this.$route.params.uid;
    const token = this.$route.params.token;

    this.uid = uid;
    this.token = token;
  },
  computed: {
    isLoading: function () {
      return this.$store.getters.isPasswordResetLoading;
    },
    isError: function () {
      return this.$store.getters.isPasswordResetError;
    },
    passwordsDoNotMatch: function () {
      return this.newPassword !== this.newPassword2;
    },
    showPasswordsDoNotMatchError: function () {
      return (
        this.passwordsDoNotMatch &&
        this.newPassword.length > 0 &&
        this.newPassword2.length > 0
      );
    },
    showPasswordTooShortError: function () {
      return this.newPassword.length > 0 && this.newPassword.length < 8;
    },
    submitDisabled: function () {
      return (
        this.newPassword.length < 8 ||
        this.passwordsDoNotMatch ||
        this.isLoading ||
        this.formSubmitted
      );
    },
    page_status: function () {
      if (this.formSubmitted) {
        if (this.isLoading) {
          return PAGE_STATUS.RESETTING_PASSWORD;
        }
        if (this.isError) {
          return PAGE_STATUS.PASSWORD_RESET_FAILED;
        }
        return PAGE_STATUS.PASSWORD_RESET_REDIRECTING;
      }
      return PAGE_STATUS.RESET_PASSWORD_FORM;
    },
  },
  watch: {
    page_status: function () {
      if (this.page_status === PAGE_STATUS.PASSWORD_RESET_REDIRECTING) {
        setTimeout(() => {
          this.$router.push("/login");
        }, 5000);
      }
    },
  },
  methods: {
    resetPassword() {
      if (this.passwordsDoNotMatch) {
        return;
      }
      this.formSubmitted = true;
      this.$store
        .dispatch("resetPassword", {
          uid: this.uid,
          token: this.token,
          new_password: this.newPassword,
        })
        .catch((error) => {
          this.error =
            error?.response?.data ||
            "Failed to reset password. Please try again.";
          alert(this.error);
        });
    },
  },
};
</script>

<template>
  <div class="sign">
    <!-- staer-hero-section -->
    <div class="sign-up-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 dn-sm">
            <div class="sign-left text-center">
              <img src="../assets/img/fotgot-password.png" class="img-fluid" alt="" />
            </div>
          </div>
          <div class="col-sm-6">

            <div>
              <div class="sign-right">
                <h2 class="banner-heading mb-5 pb-5">
                  Reset <span>Password</span>
                </h2>
                <template v-if="error">
                  <div class="alert alert-danger" role="alert">
                    {{ error }}
                  </div>
                </template>
                <div v-if="showPasswordsDoNotMatchError">
                  <div class="alert alert-danger" role="alert">
                    The two password fields do not match.
                  </div>
                </div>
                <div v-else-if="showPasswordTooShortError">
                  <div class="alert alert-danger" role="alert">
                    Your password should be at least 8 characters long.
                  </div>
                </div>
                <div v-else-if="isError">
                  <div class="alert alert-danger" role="alert">
                    An error occurred. Please try again.
                  </div>
                </div>
                <form @submit.prevent="resetPassword">
                  <div class="contact-frm" data-aos="fade-left" method="post">
                    <div class="field-colume">
                      <input v-model="newPassword" type="password" placeholder="New Password" />
                    </div>

                    <div class="field-colume">
                      <input v-model="newPassword2" type="password" placeholder="Repeat New Password" />
                    </div>

                    <div v-if="page_status === PAGE_STATUS.RESET_PASSWORD_FORM" class="field-colume submit-btn  text-end">
                      <button class="common-btn common-btn-block" type="submit" :disabled="submitDisabled">Submit</button>
                    </div>

                    <div v-if="page_status === PAGE_STATUS.RESETTING_PASSWORD" class="col-md-12">
                      <div class="alert alert-info" role="alert">
                        <div class="spinner-container">
                          <div class="spinner-border text-primary" role="status"></div>
                        </div>
                        Resetting Password...
                      </div>

                    </div>
                    <div v-if="page_status === PAGE_STATUS.PASSWORD_RESET_REDIRECTING" class="col-md-12">
                      <div class="alert alert-info" role="alert">
                        <div class="spinner-container">
                          <div class="spinner-border text-primary" role="status"></div>
                        </div>
                        Password reset. Redirecting to login page...
                      </div>

                    </div>
                    <div v-if="page_status === PAGE_STATUS.PASSWORD_RESET_FAILED" class="col-md-12">
                      <div class="alert alert-danger" role="alert">
                        Password reset failed. Please try again.
                      </div>

                    </div>


                  </div>
                </form>

              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

    <!-- end-hero-section -->
  </div>
</template>

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

.common-btn-block {
  display: block;
  text-align: center;
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
