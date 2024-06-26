import http from "../../shared/services/http-common";

export class PaymentService {

    create(user) {
        return http.post('/api/v1/authentication/sign-up', user);
    }
    CreatePayment(payment) {
        return http.post('/api/v1/billing', payment);
    }

}
