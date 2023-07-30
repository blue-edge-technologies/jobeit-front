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
      if (this.page_status === PAGE_STATUS.PASSWORD_RESET_REDIRECTING){
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
      this.$store.dispatch("resetPassword", {
        uid: this.uid,
        token: this.token,
        new_password: this.newPassword,
      });
    },
  },
};
</script>

<template>
  <div v-if="page_status === PAGE_STATUS.RESET_PASSWORD_FORM">
    <h1>Reset Password</h1>
    <div v-if="showPasswordsDoNotMatchError">The two password fields do not match.</div>
    <div v-else-if="showPasswordTooShortError">
      Your password should be at least 8 characters long.
    </div>
    <div v-else-if="isError">An error occurred. Please try again.</div>
    <form @submit.prevent="resetPassword">
      <input v-model="newPassword" type="password" placeholder="New Password" />
      <input
        v-model="newPassword2"
        type="password"
        placeholder="Repeat New Password"
      />
      <button type="submit" :disabled="submitDisabled">Submit</button>
    </form>
  </div>
  <div v-else-if="page_status === PAGE_STATUS.RESETTING_PASSWORD">
    <div>Resetting password...</div>
  </div>
  <div v-else-if="page_status === PAGE_STATUS.PASSWORD_RESET_REDIRECTING">
    <div>Password reset. Redirecting to login page...</div>
  </div>
  <div v-else-if="page_status === PAGE_STATUS.PASSWORD_RESET_FAILED">
    <div>Password reset failed. Please try again.</div>
  </div>
</template>
