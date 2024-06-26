import http from "../../shared/services/http-common.js";

class ShoppingcartService {
  async getAllShoppingCarts() {
    try {
      const response = await http.get('/shopping-cart');
      console.log('Response from getCart:', response.data);
      return response.data.length > 0 ? response.data[0] : { id: null, items: [] };
    } catch (error) {
      console.error('Error fetching cart:', error);
      throw error;
    }
  }

  async getAllComics() {
    try {
      const response = await http.get('/v1/comics');
      console.log('Response from getAllComics:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching comics:', error);
      throw error;
    }
  }

  async createShoppingCart(cartItems) {
    try {
        const response = await http.post('/shopping-cart', cartItems);
        console.log('Response from createShoppingCart:', response.data);
        return response.data; // Debes asegurarte de que el servidor devuelva el carrito creado
    } catch (error) {
        console.error('Error creating shopping cart:', error);
        throw error;
    }
}
}

export default new ShoppingcartService();
