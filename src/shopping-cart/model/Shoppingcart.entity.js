export class Shoppingcart{
    constructor(id, libroId, pricetotal) {
        this.id = id;
        this.libroId = libroId;
        this.pricetotal = pricetotal;
    }

    static fromDisplayableCart(displayableCart) {
        return new Shoppingcart(
            displayableCart.id,
            displayableCart.libroId,
            displayableCart.pricetotal,
        );
    }

    static toDisplayableCart(shoppingcart) {
        return {
            id: shoppingcart.id,
            libroId: shoppingcart.libroId,
            pricetotal: shoppingcart.pricetotal,

        };
    }
}