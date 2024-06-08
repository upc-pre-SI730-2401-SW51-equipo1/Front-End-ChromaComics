import http from "../../shared/service/http-common.js";

export class PaymentService {

    getAll() {
        return http.get("/payments");
    }

    getById(id) {
        return http.get(`/payments/${id}`);
    }

    create(user) {
        return http.post('/payments', user);
    }
    update(id, user) {
        return http.put(`/payments/${id}`, user);
    }
    delete(id) {
        return http.delete(`/payments/${id}`);
    }
}
