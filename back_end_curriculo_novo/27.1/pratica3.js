"use strict";
class Cliente {
    constructor(name) {
        this._name = name;
    }
}
class Item {
    constructor(nameItem, price) {
        this._nameItem = nameItem;
        this._price = price;
    }
    get prices() {
        return this._price;
    }
}
class Pedido {
    constructor(client, items, paymentMethod, discount) {
        this._items = [];
        this._discount = 0;
        this._client = client;
        this._items = items;
        this._paymentMethod = paymentMethod;
        this._discount = discount;
    }
    calculateTotal() {
        return this._items.
            reduce((previousValue, item) => {
            const total = previousValue += item.prices;
            return total;
        }, 0);
    }
    calculateTotalWithDiscount() {
        return this.calculateTotal() * (1 - this._discount);
    }
}
const cliente = new Cliente('João');
const sanduiche = new Item('Sandwiche Natural', 5.00);
const suco = new Item('Suco de Abacaxí', 5.00);
const sobremesa = new Item('Gelatina de Uva', 2.50);
const ordem = new Pedido(cliente, [sanduiche, suco, sobremesa], 'dinheiro', 0.10);
console.log(ordem);
console.log('Valor normal: ', ordem.calculateTotal());
console.log('Valor com desconto: ', ordem.calculateTotalWithDiscount());
