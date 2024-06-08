import http from "../../shared/services/http-common.js";
import { Comic } from "@/recommendations/model/Comic.entity.js";

class RecommendationsService {
    getAll() {
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

    async getAllComics() {
        try {
            const response = await http.get('/comics');
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