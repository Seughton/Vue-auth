<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a v-if='!route' href="http://localhost:3000/auth/google" class="signUpButton">Sign Up</a>
    <button @click="fetchUser" v-if='route'>GO TO PROFILE</button>
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
    return {
    };
  },
  computed: {
    route() {
      return this.$route.hash;
    },
    userProfile() {
      return this.$store.state.userProfile;
    }
  },
  created() {
  },
  watch: {
    route(newVal) {
      console.log(newVal);
    }
  },
  methods: {
    fetchUser() {
      let id = this.$route.hash.slice(1);    
      axios
        .get(`http://localhost:3000/getUser`, {
          params: {
            id
          }
        })
        .then(response => response.data)
        .then(data => {
          console.log('USER',data)
          this.$store.dispatch("setUser", data);
          this.$router.push("/profile");
        });
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.signUpButton {
  height: 40px;
  width: 100px;
  background: white;
  border: 1px solid rgb(98, 98, 223);
  cursor: pointer;
}
.signUpButton:hover {
  background-color: rgba(230, 233, 185, 0.5);
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
