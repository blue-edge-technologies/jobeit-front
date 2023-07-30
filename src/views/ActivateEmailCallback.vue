<script>
const PAGE_STATUS = Object.freeze({
  ACTIVATING_EMAIL: 1,
  REDIRECTING_TO_LOGIN: 2,
  FAILED_TO_ACTIVATE_EMAIL: 3,
});

export default {
  name: "activateEmail",
  mounted() {
    const uid = this.$route.params.uid;
    const token = this.$route.params.token;

    this.$store.dispatch("activateEmail", {
      uid,
      token,
    });
  },
  computed: {
    isError: function () {
      return this.$store.getters.isActivateEmailError;
    },
    emailActivated: function () {
      return this.$store.getters.isEmailActivated;
    },
    page_status: function () {
      if (this.isError) {
        return PAGE_STATUS.FAILED_TO_ACTIVATE_EMAIL;
      }
      if (this.emailActivated) {
        return PAGE_STATUS.REDIRECTING_TO_LOGIN;
      }
      return PAGE_STATUS.ACTIVATING_EMAIL;
    },
  },
  watch: {
    page_status: function () {
      if (this.page_status === PAGE_STATUS.REDIRECTING_TO_LOGIN) {
        setTimeout(() => {
          this.$router.push("/login");
        }, 5000);
      }
    },
  },
  data() {
    return {
      PAGE_STATUS,
    };
  },
};
</script>

<template>
  <div v-if="page_status === PAGE_STATUS.ACTIVATING_EMAIL">
    <h1>Activating your email...</h1>
  </div>
  <div v-else-if="page_status === PAGE_STATUS.REDIRECTING_TO_LOGIN">
    <h1>Email activated. Redirecting to login page...</h1>
  </div>
  <div v-else-if="page_status === PAGE_STATUS.FAILED_TO_ACTIVATE_EMAIL">
    <h1>
      Failed to activate your email. Please try again or resend your activation
      email.
      <router-link to="/login">Go to Login</router-link>
    </h1>
  </div>
</template>
