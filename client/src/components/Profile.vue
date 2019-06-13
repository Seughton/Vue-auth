<template>
  <div v-if='userProfile' class="profile-container">
    <div class="profile-navigation">
      <h1>Greetings</h1>
      <button class="logout-button" @click="handleLogout">Logout</button>
    </div>
    <div class="profile-info">
      <div class="profile-photo" :style="{'background-image': `url(${userProfile.photo})`}"></div>
      <span>Name: {{userProfile.display_name}}</span>
      <span>Email: {{userProfile.email}}</span>
      <span>Locale: {{userProfile.locale}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    userProfile() {
      return this.$store.state.userProfile
    }
  },
  mounted() {
    if(localStorage.getItem('user')) {
      this.$store.dispatch("setUser", {id :localStorage.getItem('user')})
    }
  },

  methods: {
    handleLogout() {
      this.$store.dispatch("logOut");
      localStorage.removeItem('user')
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.profile-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.profile-photo {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 15px
}
.profile-info {
  padding: 25px 0;
  display: flex;
  flex-direction: column;
}
.profile-info img {
  padding-bottom: 25px;
}
.logout-button {
  height: 40px;
  width: 200px;
  background: rgb(98, 164, 222);
  border: none;
  cursor: pointer;
  font-size: 18px;
}
</style>
