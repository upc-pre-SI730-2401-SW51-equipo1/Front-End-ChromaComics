import http from "../../shared/services/http-common.js";

class ShoppingcartService {
  async getAllShoppingCarts() {
    try {
      const response = await http.get('api/shopping-cart');
      console.log('Response from getCart:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching cart:', error);
      throw error;
    }
  }

  async getAllComics() {
    try {
      const response = await http.get('api/v1/comics');
      console.log('Response from getAllComics:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching comics:', error);
      throw error;
    }
  }
  async deleteCart(cartId) {
    try {
      const response = await http.delete(`api/shopping-cart/${cartId}`);
      console.log('Response from deleteCart:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error deleting cart:', error);
      throw error;
    }
  }
  async deleteAllCarts() {
    try {
      const carts = await this.getAllShoppingCarts();
      for (const cart of carts) {
        await this.deleteCart(cart.id);
      }
    } catch (error) {
      console.error('Error deleting all carts:', error);
      throw error;
    }
  }

  async createShoppingCart(cartItems) {
    try {
        const response = await http.post('api/shopping-cart', cartItems);
        console.log('Response from createShoppingCart:', response.data);
        return response.data; // Debes asegurarte de que el servidor devuelva el carrito creado
    } catch (error) {
        console.error('Error creating shopping cart:', error);
        throw error;
    }

}
}

export default new ShoppingcartService();
