<template>
  <div id="app">
    <img src="../../../assets/logo.png.png" alt="Logo" class="logo" />
    <input type="text" placeholder="USER NAME" class="input-field" v-model="username">
    <input type="password" placeholder="PASSWORD" class="input-field" v-model="password">
    <button class="button" @click="login">LOGIN</button>
    <br>
    <button class="button" @click="redirectToCreateAccount">CREATE ACCOUNT</button>
  </div>
</template>
<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'
import useAuth from '/src/Login/service/useAuth.js'
import Cookies from 'js-cookie';

export default {
  setup() {
    const router = useRouter()
    const username = ref('')
    const password = ref('')
    const { setAuthenticated } = useAuth()

    const login = async () => {
      if (!username.value || !password.value) {
        alert('All fields must be filled out')
        return
      }

      const response = await axios.get('http://localhost:3000/users', {
        params: {
          username: username.value,
          password: password.value
        }
      })

      if (response.data.length > 0) {
        setAuthenticated(true);
        Cookies.set('isAuthenticated', 'true');
        router.push('/comics')
      } else {
        alert('Invalid credentials')
      }
    }

    const redirectToCreateAccount = () => {
      router.push('/create-account')
    }

    return {
      redirectToCreateAccount,
      login,
      username,
      password
    }
  }
}
</script>