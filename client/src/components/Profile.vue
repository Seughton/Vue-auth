<template>
  <div>
    <h1>greetings</h1>
    <button @click="handleLogout">Logout</button>
    {{userProfile}}
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    userProfile() {
      return this.$store.state.userProfile;
    }
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('logOut')
      this.$router.push('/login')
    }
  }
};
</script>

<style>
</style>
