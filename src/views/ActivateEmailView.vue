<template>
  <div class="">
    <h1>
      We've sent you an activation email. Please check your inbox and click the
      activation link.
    </h1>

    <h2>
      If you don't see the activation email, please check your spam folder.
    </h2>

    <div v-if="activationError">
      <h2>Failed to send activation email. Please try again.</h2>
    </div>
    <div v-else>
      <h2>
        If you haven't received an activation email, please click the button
      </h2>
      <button @click="resentActivationEmail">Resend activation email</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivateEmail",
  methods: {
    resentActivationEmail() {
      this.$store.dispatch("resendActivationEmail");
    },
  },
  computed: {
    activationError() {
      return this.$store.getters.isResendActivationEmailError;
    },
  },
};
</script>
