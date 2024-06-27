import http from '../../shared/services/http-common';
import axios from 'axios';

const baseUrl = 'https://backend-chromacomics-40a97e042fb4.herokuapp.com/api/v1/comics';

export class TutorialsApiService {
    getComics() {
        return http.get('/comics');
    }
    getById(id) {
        return http.get(`/comics/${id}`);
    }
    create(data) {
        return http.post('/comics', data);
    }
    update(id, data) {
        return http.put(`/comics/${id}`, data);
    }

    delete(id) {
        return http.delete(`/comics/${id}`);
    }
}

export function fetchComics() {
    return axios.get(baseUrl)
        .then(response => response.data);
}

export function filterComicsByCategory(categoryId) {
    return axios.get(`${baseUrl}/category/${categoryId}/comics`)
        .then(response => response.data);
}

