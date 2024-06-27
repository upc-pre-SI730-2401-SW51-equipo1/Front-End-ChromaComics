import http from "../../shared/services/http-common.js";
import { Comic } from "../model/Comic.entity.js";

class RecommendationsService {
    getAll() {
        return http.get('/recommendation');
    }

    getById(id) {
        return http.get(`/recommendation/${id}`);
    }

    create(data) {
        return http.post('/recommendation', data);
    }

    update(id, data) {
        return http.put(`/recommendation/${id}`, data);
    }

    delete(id) {
        return http.delete(`/recommendation/${id}`);
    }

    async getAllComics() {
        try {
            const response = await http.get('/recommendation');
            if (response.data && Array.isArray(response.data)) {
                return response.data.map(comic => Comic.fromDisplayableComic(comic));
            } else {
                console.error('La respuesta no tiene el formato esperado.');
                return [];
            }
        } catch (error) {
            console.error('Error fetching comics:', error);
            throw error;
        }
    }
}

export default new RecommendationsService();
