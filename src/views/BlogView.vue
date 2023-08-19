<template>
  <div class="body">
    <nav-bar></nav-bar>
    <div class="banner-section">
      <div class="banner-row">
        <div class="banner-left">
          <h2 class="banner-heading">Our Jobiet <span>Blog</span></h2>
        </div>
        <div class="banner-right"></div>
      </div>
    </div>

    <!-- start-blog-section -->
    <section class="bolg-section">
      <div class="container">
        <div class="blogs"></div>
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
</style>