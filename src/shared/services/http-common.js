import axios from 'axios';

export default axios.create({
    baseURL: 'https://backend-chromacomics-40a97e042fb4.herokuapp.com/api/',
    headers: { 'Content-type': 'application/json' }
});
