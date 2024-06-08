import http from "../../shared/services/http-common.js";
import { Shoppingcart } from "../model/Shoppingcart.entity.js";

class ShoppingcartService {
    getAll() {
        return http.get('/shoppingcart');
    }

    getById(id) {
        return http.get(`/shoppingcart/${id}`);
    }

    create(data){
        return http.post('/shoppingcart', data);
    }

    update(id, data) {
        return http.put(`/shoppingcart/${id}`, data);
    }

    delete(id) {
        return http.delete(`/shoppingcart/${id}`);
    }

    async getAllCarts() {
        try {
            const response = await http.get('/shoppingcart');
            if (response.data && Array.isArray(response.data)) {
                return response.data.map(shoppingcart => Shoppingcart.fromDisplayableCart(shoppingcart));
            } else {
                console.error('La respuesta no tiene el formato esperado.');
                return [];
            }
        } catch (error) {
            console.error('Error fetching cart:', error);
            throw error;
        }
    }

    async getCart() {
        try {
            const response = await http.get('/shoppingcart');
            if (response.data && Array.isArray(response.data) && response.data.length > 0) {
                return response.data[0]; // Asumiendo que hay un solo carrito
            } else {
                console.error('La respuesta no tiene el formato esperado o está vacía.');
                return { id: null, items: [] }; // Carrito vacío por defecto
            }
        } catch (error) {
            console.error('Error fetching cart:', error);
            return { id: null, items: [] }; // Carrito vacío en caso de error
        }
    }

    async getAllBooks() {
        try {
            const response = await http.get('/libros');
            return response.data;
        } catch (error) {
            console.error('Error fetching the books:', error);
            throw error;
        }
    }
}

export default new ShoppingcartService();
