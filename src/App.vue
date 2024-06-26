<script >
import useAuth from "./Login/service/useAuth.js";
import Cookies from "js-cookie";
export default {
  name: 'App',

  created() {
    const {isAuthenticated, setAuthenticated} = useAuth();
    const isAuth = Cookies.get('isAuthenticated') === 'true';
    setAuthenticated(isAuth);
  }
}

</script>

<template>
  <router-view/>

</template>

<style>
</style>
