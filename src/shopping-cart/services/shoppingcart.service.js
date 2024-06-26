import http from "../../shared/services/http-common.js";

class ShoppingcartService {
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
            const response = await http.get('/comics');
            return response.data;
        } catch (error) {
            console.error('Error fetching comics:', error);
            throw error;
        }
    }

    create(data) {
        return http.post('/shoppingcart', data);
    }

    update(id, data) {
        return http.put(`/shoppingcart/${id}`, data);
    }
}

export default new ShoppingcartService();
