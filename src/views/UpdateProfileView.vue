<template>
  <div class="body">
    <nav-bar> </nav-bar>
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
        <div class="row">
          <template v-if="updateProfileErrors">
            <template v-for="[k, v] in updateProfileErrors">
              <div class="alert alert-danger" role="alert" :key="k">
                {{ k }}: {{ v }}
              </div>
            </template>
          </template>
          <div class="col-md-6">
            <div class="input-field">
              <label for="institution">Institution</label
              ><input
                type="text"
                name="institution"
                v-model="jobSeekerEducation.institution"
                class="form-control"
                id="id_institution"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="qualification">Qualification</label
              ><input
                type="text"
                v-model="jobSeekerEducation.qualification"
                name="qualification"
                class="form-control"
                id="id_qualification"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="degree">Degree</label
              ><input
                type="text"
                v-model="jobSeekerEducation.degree"
                name="degree"
                class="form-control"
                id="id_degree"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="start_date">Start Date</label
              ><input
                type="date"
                v-model="jobSeekerEducation.start_date"
                name="start_date"
                class="form-control"
                id="id_start_date"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="graduated">Graduated</label
              ><input
                type="text"
                v-model="jobSeekerEducation.graduated"
                name="graduated"
                class="form-control"
                id="id_graduated"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="major_subject">Major Subject</label
              ><input
                type="text"
                v-model="jobSeekerEducation.major_subject"
                name="major_subject"
                class="form-control"
                id="id_major_subject"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="ethnicity">Ethnicity</label
              ><select
                class="form-control"
                name="ethnicity"
                id="id_ethnicity"
                v-model="ethnicity"
              >
                <option
                  v-for="ethnicity in ETHNICITY_OPTIONS"
                  :value="ethnicity"
                  v-bind:key="ethnicity"
                >
                  {{ ethnicity }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="date_birth">Date Of Birth</label
              ><input
                type="date"
                v-model="date_birth"
                name="date_birth"
                class="form-control"
                id="id_date_birth"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="sex">Sex</label>
              <!-- <input
                type="text"
                v-model="sex"
                name="sex"
                class="form-control"
                id="id_sex"
              /> -->
              <select class="form-control" name="sex" id="id_sex" v-model="sex">
                <option
                  v-for="sex in SEX_OPTIONS"
                  :value="sex"
                  v-bind:key="sex"
                >
                  {{ sex }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="marital_status">Marital Status</label>
              <!-- <input
                type="text"
                v-model="marital_status"
                name="marital_status"
                class="form-control"
                id="id_marital_status"
              /> -->
              <select
                v-model="marital_status"
                class="form-control"
                name="marital_status"
                id="id_marital_status"
              >
                <option
                  v-for="maritalStatus in MARITAL_STATUS_OPTIONS"
                  :value="maritalStatus"
                  v-bind:key="maritalStatus"
                >
                  {{ maritalStatus }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="addressLine1">Address Line1</label
              ><input
                type="text"
                v-model="addressLine1"
                name="addressLine1"
                class="form-control"
                id="id_addressLine1"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="addressLine2">Address Line2</label
              ><input
                type="text"
                v-model="addressLine2"
                name="addressLine2"
                class="form-control"
                id="id_addressLine2"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="suburb">Suburb</label
              ><input
                type="text"
                v-model="suburb"
                name="suburb"
                class="form-control"
                id="id_suburb"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="city">City</label
              ><input
                type="text"
                v-model="city"
                name="city"
                class="form-control"
                id="id_city"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="province">Province</label>

              <select
                class="form-control"
                name="province"
                id="id_province"
                v-model="province"
              >
                <option
                  v-for="province in PROVINCE_OPTIONS"
                  v-bind:key="province"
                >
                  {{ province }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="phoneNumber">Phone Number</label
              ><input
                type="text"
                v-model="phoneNumber"
                name="phoneNumber"
                class="form-control"
                id="id_phoneNumber"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="cv">Cv</label
              ><input
                type="file"
                name="cv"
                class="form-control-file"
                accept="application/pdf"
                id="id_cv"
                @change="onCvChange"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="image">Profile Picture</label
              ><input
                type="file"
                name="image"
                class="form-control-file"
                accept="image/*"
                id="id_image"
                @change="onImageChange"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-field">
              <label for="cover_letter">Cover Letter</label
              ><input
                type="file"
                name="cover_letter"
                class="form-control-file"
                accept="application/pdf"
                id="id_cover_letter"
                @change="onCoverLetterChange"
              />
            </div>
          </div>
        </div>
        <div class="col-md-12 text-end">
          <button
            type="submit"
            class="common-btn common-btn-block"
            @click="updateProfile"
            :disabled="submitDisabled"
          >
            <span>Update my profile</span>
            <svg viewBox="0 0 40 40" fill="none">
              <path
                d="M23.8844 38.9238C23.3708 38.2063 23.1242 37.3393 23.1448 36.3229C23.167 35.3064 23.435 34.4395 23.9486 33.722L31.2038 23.5874H2.56822C1.84056 23.5874 1.23018 23.243 0.737079 22.5543C0.245693 21.8679 0 21.0164 0 20C0 18.9836 0.245693 18.1309 0.737079 17.4422C1.23018 16.7558 1.84056 16.4126 2.56822 16.4126H31.2038L23.8844 6.18834C23.3708 5.47085 23.114 4.61823 23.114 3.63049C23.114 2.64514 23.3708 1.79372 23.8844 1.07623C24.3981 0.358743 25.0085 0 25.7156 0C26.421 0 27.0305 0.358743 27.5441 1.07623L39.2937 17.4888C39.5506 17.8475 39.7329 18.2362 39.8408 18.6547C39.9469 19.0732 40 19.5217 40 20C40 20.4783 39.9469 20.9268 39.8408 21.3453C39.7329 21.7638 39.5506 22.1525 39.2937 22.5112L27.4799 39.0134C27.0091 39.6711 26.421 40 25.7156 40C25.0085 40 24.3981 39.6413 23.8844 38.9238Z"
                fill="#0146B1"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
    <footer-section></footer-section>
  </div>
</template>

<script>
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";

const PROVINCE_OPTIONS = Object.freeze({
  Gauteng: "Gauteng",
  Mpumalanga: "Mpumalanga",
  "Free-state": "Free-state",
  "North-west": "North-west",
  Limpopo: "Limpopo",
  "Western-cape": "Western-cape",
  "Nothern-cape": "Nothern-cape",
  "Eastern-cape": "Eastern-cape",
  "Kwazulu-natal": "Kwazulu-natal",
});

const MARITAL_STATUS_OPTIONS = Object.freeze({
  Married: "Married",
  Single: "Single",
  Widowed: "Widowed",
  Divorced: "Divorced",
});

const SEX_OPTIONS = Object.freeze({
  Male: "Male",
  Female: "Female",
  Other: "Other",
});

const ETHNICITY_OPTIONS = Object.freeze({
  Coloured: "Coloured",
  White: "White",
  Black: "Black",
  Indian: "Indian",
  Chinese: "Chinese",
});

function prepareEducation(educationArr) {
  // jobSeekerEducation[0].institution=12
  // jobSeekerEducation[0].qualification=12
  // jobSeekerEducation[0].degree=12
  // jobSeekerEducation[0].start_date=2023-01-31
  // jobSeekerEducation[0].graduated=12
  // jobSeekerEducation[0].major_subject=12
  return educationArr.flatMap((education, index) => [
    [`jobSeekerEducation[${index}].institution`, education.institution],
    [`jobSeekerEducation[${index}].qualification`, education.qualification],
    [`jobSeekerEducation[${index}].degree`, education.degree],
    [`jobSeekerEducation[${index}].start_date`, education.start_date],
    [`jobSeekerEducation[${index}].graduated`, education.graduated],
    [`jobSeekerEducation[${index}].major_subject`, education.major_subject],
  ]);
}

export default {
  components: { FooterSection, NavBar },
  data() {
    return {
      // TODO: Convert to array
      jobSeekerEducation: {
        institution: "",
        qualification: "",
        degree: "",
        start_date: "",
        graduated: "",
        major_subject: "",
      },

      ethnicity: "",
      date_birth: "",
      sex: "",
      marital_status: "",
      addressLine1: "",
      addressLine2: "",
      suburb: "",
      city: "",
      province: "",
      phoneNumber: "",
      cv: "",
      image: "",
      cover_letter: "",

      error: "",

      PROVINCE_OPTIONS,
      MARITAL_STATUS_OPTIONS,
      SEX_OPTIONS,
      ETHNICITY_OPTIONS,
    };
  },

  methods: {
    onCvChange(e) {
      const file = e.target.files[0];
      this.cv = file;
    },
    onImageChange(e) {
      const file = e.target.files[0];
      this.image = file;
    },
    onCoverLetterChange(e) {
      const file = e.target.files[0];
      this.cover_letter = file;
    },
    updateProfile() {
      const formData = new FormData();
      formData.append("cv", this.cv);
      formData.append("image", this.image);
      formData.append("cover_letter", this.cover_letter);
      formData.append("date_birth", this.date_birth);
      formData.append("addressLine1", this.addressLine1);
      formData.append("addressLine2", this.addressLine2);
      formData.append("suburb", this.suburb);
      formData.append("city", this.city);
      formData.append("province", this.province);
      formData.append("phoneNumber", this.phoneNumber);
      prepareEducation([this.jobSeekerEducation]).forEach(([key, value]) =>
        formData.append(key, value)
      );
      formData.append("ethnicity", this.ethnicity);
      formData.append("sex", this.sex);
      formData.append("marital_status", this.marital_status);

      this.$store.dispatch("updateJobseeker", formData).catch((err) => {
        this.error = err || "Failed to update profile";
      });
    },
  },
  computed: {
    submitDisabled: function () {
      const required = [
        "date_birth",
        "addressLine1",
        "addressLine2",
        "suburb",
        "city",
        "province",
        "phoneNumber",
        "jobSeekerEducation",
      ];
      console.log(required.forEach((field) => console.log(field, this[field])));
      return required.some((field) => !this[field]);
    },
    isError() {
      return this.$store.getters.updateProfileError;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    updateProfileErrors() {
      // return this.$store.getters.getUpdateProfileErrors;
      if (
        this.$store.getters.getUpdateProfileErrors !== null &&
        Object.keys(this.$store.getters.getUpdateProfileErrors).length > 0
      ) {
        return Object.entries(this.$store.getters.getUpdateProfileErrors);
      }
      return false;
    },
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

.common-btn:disabled {
  background: #d7d7d7 !important;
  cursor: auto !important;
}
.common-btn:hover:disabled svg {
  -webkit-transform: translateX(0rem);
  -ms-transform: translateX(0rem);
  transform: translateX(0rem);
}

.common-btn:hover:disabled {
  opacity: 1 !important;
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
}
</style>
