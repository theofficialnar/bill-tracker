<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand is-size-1">
        <router-link class="navbar-item" exact to="/">Bill Tracker</router-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu navbar-end">
        <router-link class="navbar-item" exact to="/">Home</router-link>
        <router-link class="navbar-item" to="/history">History</router-link>
        <router-link class="navbar-item" to="/login">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "app-navbar",
  data() {
    return {};
  }
};
</script>

<style scoped>
.navbar {
  box-shadow: 0 0 15px black;
}

.navbar-menu .navbar-item {
  font-family: "Raleway", sans-serif;
  transition: 300ms ease-in-out;
}

.navbar-brand .navbar-item {
  font-family: "Libre Barcode 128 Text", cursive;
}

.navbar-menu .navbar-item:hover,
.navbar-menu .router-link-active {
  font-weight: bold;
  text-decoration: underline;
  font-size: 1.2rem;
}
</style>