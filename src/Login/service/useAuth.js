// src/useAuth.js
import { ref } from 'vue';
import Cookies from 'js-cookie';

export default function useAuth() {
    const isAuthenticated = ref(Cookies.get('isAuthenticated') === 'true');

    function setAuthenticated(value) {
        isAuthenticated.value = value;
        Cookies.set('isAuthenticated', value.toString());
    }

    return { isAuthenticated, setAuthenticated };
}