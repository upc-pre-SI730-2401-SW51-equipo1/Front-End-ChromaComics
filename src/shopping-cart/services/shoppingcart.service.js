import http from "../../shared/services/http-common.js";

class ShoppingcartService {
    getAll() {
        return http.get('/shoppingcart');
    }

    getById(id) {
        return http.get(`/shoppingcart/${id}`);
    }

    create(data) {
        return http.post('/shoppingcart', data);
    }

    update(id, data) {
        return http.put(`/shoppingcart/${id}`, data);
    }

    delete(id) {
        return http.delete(`/shoppingcart/${id}`);
    }

    async getCart() {
        try {
            const response = await http.get('/shoppingcart'); 
            return response.data.length > 0 ? response.data[0] : null; 
        } catch (error) {
            console.error('Error fetching cart:', error);
            throw error;
        }
    }

    async getAllBooks() {
        try {
            const response = await http.get('/libroscarrito');
            return response.data;
        } catch (error) {
            console.error('Error fetching books:', error);
            throw error;
        }
    }
}

export default new ShoppingcartService();
