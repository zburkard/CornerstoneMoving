<template>
  <nav class="navbar navbar-expand-lg navbar-dark light px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" class="p-1 mt-2" src="../assets/img/cornerstone_logo.png" height="90" />
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <a href="#About" class="cstone rounded text-light selectable p-2 px-4 mx-4">About Us</a>
        </li>
        <li>
          <a href="#About" class="cstone rounded text-light selectable p-2 px-4 mx-4">Our Services</a>
        </li>
        <li>
          <a href="#About" class="cstone rounded text-light selectable p-2 px-4 mx-4">Check Our Schedule</a>
        </li>
        <li>
          <a href="#About" class="cstone rounded text-light selectable p-2 px-4 mx-4">Contact Us</a>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
.cstone{
  background-color: #00538E;
}

</style>
