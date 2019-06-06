<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <button class="signUpButton">
        Sign Up
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthPage',
  props: {
    msg: String,
  },
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
   background-color: rgba(230, 233, 185,.5);
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
