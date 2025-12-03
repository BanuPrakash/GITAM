export default class Product {
    title;
    price;
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    getTitle() {
        return this.title;
    }

    getPrice() {
        return this.price;
    }
}

