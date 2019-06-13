<template>
  <div class="hello">
    <h1 style="padding-bottom: 20px;">{{ msg }}</h1>
    <a v-if="!route" :href="envMode==='development' ? this.config.devGoogleURL: this.config.prodGoogleURL" class="signUpButton">Sign Up</a>
    <button class="profile-button" @click="fetchUser" v-if="route">GO TO PROFILE</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AuthPage",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  computed: {
    route() {
      return this.$route.hash;
    },
    userProfile() {
      return this.$store.state.userProfile;
    },
    envMode () {
      return process.env.NODE_ENV
    }
  },
  mounted() {
    if (localStorage.getItem('user')) {
      this.$router.push("/profile");
    }
  },
  created() {
    console.log('process.env.NODE_ENV',process.env.NODE_ENV)
    },
  methods: {
    fetchUser() {
      let id = this.$route.hash.slice(1);
      this.$store.dispatch("setUser", { id })
      localStorage.setItem("user", this.$route.hash.slice(1));
      this.$router.push("/profile");        
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.signUpButton {
  padding: 20px 100px;
  background: white;
  border: 1px solid rgb(98, 98, 223);
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.signUpButton:hover {
  background-color: rgba(129, 76, 15, 0.5);
}
.profile-button {
  width: 200px;
  height: 40px;
  background: rgb(99, 61, 61);
  color: white;
  border: none
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
