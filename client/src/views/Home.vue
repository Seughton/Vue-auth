<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <AuthPage msg="Дороу"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AuthPage from '@/components/AuthPage.vue';

export default {
  name: 'home',
  components: {
    AuthPage,
  },
};
</script>
