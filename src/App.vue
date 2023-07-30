<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: "App",
  mounted() {
    this.$store.commit("loadFromLocalStorage")
  }
};
</script>