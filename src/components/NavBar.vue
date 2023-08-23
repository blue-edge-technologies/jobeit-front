<template>
  <header>
    <nav>
      <div class="container">
        <div class="header-row">
          <div class="">
            <ul class="menu justify-center-sm">
              <!-- <li><a href="/" class="active">Home</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/blog">Blogs</a></li> -->
              <li><router-link class="active" to="/">Home</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
              <li><router-link to="/blog">Blogs</router-link></li>
            </ul>
          </div>

          <div v-if="Looggedin == false">
            <div class="header-right">
              <router-link to="/signup"> Sign Up</router-link>
              <router-link to="/login"> Log in</router-link>
            </div>
          </div>
          <div v-else>
            <div class="dropdown">
              <div
                @click="dropshowing"
                class="header-right header-right-profile"
                type="button"
                aria-expanded="false"
              >
                <a class="profile-pic"
                  ><img
                    :src="imageURL"
                    width="60"
                    alt="" /></a
                ><span class="">Welcome, {{username}}</span>
              </div>
              <div v-if="dropshow">
                <ul class="our-dropdown-menu">
                  <li class="header-right header-right-profile">
                    <!-- <a class="dropdown-item header-link" href="/profile/"
                      ><span class="">Update Profile</span></a
                    > -->
                    <router-link
                      to="/update-profile"
                      class="dropdown-item header-link"
                      ><span class="">Update Profile</span></router-link
                    >
                  </li>
                  <li class="header-right header-right-profile">
                    <!-- <a class="dropdown-item header-link" href="/userprofile/5"
                      ><span class="">Profile</span></a
                    > -->
                    <router-link to="/profile" class="dropdown-item header-link"
                      ><span class="">Profile</span></router-link
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li class="header-right header-right-profile">
                    <!-- <a class="dropdown-item header-link" href="/auth/logout/"
                      ><span class="">Logout</span></a
                    > -->

                    <a @click="logout" class="dropdown-item header-link"
                      ><span class="">Logout</span></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { API_URL } from "@/config";

export default {
  data() {
    return {
      dropshow: false,     
      API_URL 
    };
  },
  methods: {
    dropshowing() {
      this.dropshow = !this.dropshow;
    },
    logout(){
      this.$store.dispatch('logout')
    }
  },
  computed: {
    Looggedin() {
      return this.$store.getters.isAuthenticated;
    },
    username() {
      console.log(this.$store.getters.getUserName)
     return this.$store.getters.getUserName;
    
    },
     profile() {
      return this.$store.getters.getProfile;
    },
    imageURL() {
      return `${this.API_URL}${this.profile?.image}`;
    }
  },
   
};
</script>

<style scoped>
header {
  padding: 3rem 0;
  background: #fff;
}
.our-dropdown-menu {
  position: absolute;
  z-index: 1000;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
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
.header-right .profile-pic img {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  overflow: hidden;
}

.header-right .profile-pic  {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

</style>
