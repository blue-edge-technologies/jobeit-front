<template>
  <header>
    <div class="container">
      <div class="header-row">
        <div class="">
          <ul class="menu justify-center-sm">
            <li><a href="/" class="active">Home</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blogs">Blogs</a></li>
          </ul>
        </div>

        <div class="">
          <div class="header-right">
            <a href="/auth/signup/">Sign up</a>
            <a href="/auth/login/">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
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
  text-decoration: none;
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
  text-decoration: none;
}
</style>