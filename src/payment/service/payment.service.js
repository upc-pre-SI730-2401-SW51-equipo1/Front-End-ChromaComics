import http from "../../shared/services/http-common";

export class PaymentService {

    create(user) {
        return http.post('/payments', user);
    }

}
