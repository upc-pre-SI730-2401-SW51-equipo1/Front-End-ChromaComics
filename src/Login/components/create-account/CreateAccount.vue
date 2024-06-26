<template >
  <div id="App">
    <img src="../../../assets/logo.png.png" alt="Logo" class="logo" />
    <input type="text" placeholder="USER NAME" class="input-field" v-model="username">
    <input type="password" placeholder="PASSWORD" class="input-field" v-model="password">
    <input type="tel" placeholder="MOBILE NUMBER" class="input-field" v-model="mobileNumber">
    <button class="button" @click="createAccount">SIGN IN</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import useAuth from '/src/Login/service/useAuth.js'
import Cookies from 'js-cookie'

export default {
  setup() {
    const router = useRouter()
    const username = ref('')
    const password = ref('')
    const mobileNumber = ref('')
    const { setAuthenticated } = useAuth()

    const createAccount = async () => {
      if (!username.value || !password.value || !mobileNumber.value) {
        alert('All fields must be filled out')
        return
      }

      const response = await axios.post('https://backend-chromacomics-40a97e042fb4.herokuapp.com/api/v1/authentication/sign-up', {
        username: username.value,
        password: password.value,
        cellphoneNumber: mobileNumber.value
      })

      if (response.status === 200) {
        setAuthenticated(true);
        Cookies.set('isAuthenticated', 'true');
        router.push('/comics')
      } else {
        alert('Error creating account')
      }
    }

    return {
      createAccount,
      username,
      password,
      mobileNumber
    }
  }
}
</script>
