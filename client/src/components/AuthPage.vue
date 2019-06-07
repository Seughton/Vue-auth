<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <form action="http://localhost:3000/auth/google"> -->
    <a href="http://localhost:3000/auth/google" class="signUpButton">Sign Up</a>
    <!-- </form> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AuthPage",
  props: {
    msg: String
  },
  created() {
    this.fetchUser();
  },
  watch: {
    // 'this.$route'(newVal) {
    //   console.log(newVal)
    // }
  },
  methods: {
    fetchUser() {
      let id = this.$route.hash.slice(1);
      console.log("ID", id);
      axios
        .get(`http://localhost:3000/getUser`, {
          params: {
            id
          }
        })
        .then(response => {
          console.log(response)
        })
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
