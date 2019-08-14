<template>
  <b-container class="p-0">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand id="navbar-brand" href="/"
        >Annette von Brandis</b-navbar-brand
      >
      <b-navbar-toggle target="navbarContent"></b-navbar-toggle>
      <b-collapse id="navbarContent" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/about">About</b-nav-item>
          <b-nav-item-dropdown v-if="loggedin" right>
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="/account">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="logout">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Navbar',
  data() {
    return {}
  },
  computed: {
    loggedin() {
      return this.$store.state.auth && this.$store.state.auth.loggedIn
    }
  },
  methods: {
    logout(evt) {
      /* eslint-disable */
      evt.preventDefault()
      this.$store.commit('auth/logout')
      console.log(`layout name ${this.$nuxt.$data.layoutName}`)
      if (this.$nuxt.$data.layoutName === 'secure') {
        this.$router.push({
          path: '/login'
        })
      }
    }
  }
})
</script>

<style lang="scss"></style>
