import http from "../../shared/services/http-common";

export class PaymentService {

    create(user) {
        let dataToSend = {
            username: user.user,
            password: "pending", // Deberías obtener este valor de alguna parte
            cellphoneNumber: user.phoneNumber
        };


        return http.post('/api/v1/authentication/sign-up', dataToSend);
    }
    CreatePayment(payment) {
        return http.post('/api/v1/billing', payment);
    }
    getproductsShoppingCart() {
        return http.get('/api/shopping-cart').then(response => response.data);
    }
    gettitleComic(id) {
        return http.get(`/api/v1/comics/${id}`).then(response => response.data);
    }

}
