// Необходимо сделать корзину (Cart) на сайте,
//     которая имееет список продуктов (Product), добавленных в корзину
// и переметры доставки (Delivery). Для Cart реализовать методы:
//     - Добавить продукт в корзину
// - Удалить продукт из корзины по ID
// - Посчитать стоимость товаров в корзине
// - Задать доставку
// - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)


// class Product {
//     id: number;
//     title: string;
//     price: number;
//
//     constructor(id: number, title: string, price: number) {
//         this.id = id;
//         this.price = price;
//         this.title = title;
//     }
// }
class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number) {
    }
}

// class Delivery {
//     date: Date;
//     constructor(date: Date) {
//         this.date = date
//     }
// }
class Delivery {
    constructor(public date: Date) {
    }
}

// class HomeDelivery extends Delivery{
//     address: string;
//     constructor(date: Date, address: string) {
//         super(date);
//         this.address = address
//     }
// }
class HomeDelivery extends Delivery{
    constructor(public date: Date, public address: string) {
        super(date);
    }
}
// class ShopDelivery extends Delivery{
//     public officeId: number
//     constructor(officeId: number) {
//         super(new Date());
//         this.officeId = officeId
//     }
// }
class ShopDelivery extends Delivery{
    constructor(public officeId: number) {
        super(new Date());
    }
}

class Cart {
    private product: Product[] = [];
    private delivery: HomeDelivery | ShopDelivery;


    public addProductToCart(product: Product) {
        this.product.push(product)
    }

    public removeProductById(productId: number) {
        this.product = this.product.filter(product => product.id !== productId)
    }

    public totalCount() {
       return this.product.reduce((result, product) => result + product.price, 0)
    }

    public setDelivery(delivery: HomeDelivery | ShopDelivery) {
        if(delivery)
        this.delivery = delivery
    }

    public checkout() {
        if (this.product.length === 0) {
            throw new Error('Отсутствуют товары к доставке')
        }
        if (!this.delivery) {
            throw new Error('Добавьте адрес доставки')
        }
        return {status: 'Success'}
    }

}


const myCar = new Product(1, 'BMW', 10000)
const myCar2 = new Product(2, 'Audi', 50000)
const myCar3 = new Product(3, 'Lincoln', 30000)
const alexCart = new Cart()
alexCart.addProductToCart(myCar)
alexCart.addProductToCart(myCar2)
alexCart.addProductToCart(myCar3)
console.log(alexCart)
console.log(alexCart.totalCount()
)
alexCart.removeProductById(2)
console.log(alexCart)
console.log(alexCart.totalCount()
)
//console.log(alexCart.checkout())
alexCart.setDelivery(new HomeDelivery(new Date(), 'Minsk'))
console.log(alexCart.checkout())
alexCart.removeProductById(1)
alexCart.removeProductById(3)

console.log(alexCart.checkout())

