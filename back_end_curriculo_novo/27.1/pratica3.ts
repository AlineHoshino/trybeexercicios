class Cliente {
  private _name: string;

  constructor(name:string){
    this._name = name;
  }
}

class Item {
  private _nameItem: string;
   private _price: number;

  constructor(nameItem: string, price:number){
    this._nameItem = nameItem;
    this._price = price;
  }

  get prices() {
    return this._price;
  }

}

class Pedido {
  private _client: Cliente;
  private _items: Item[] = [];
  private _paymentMethod: string;
  private _discount: number = 0;
  
  constructor(client: Cliente, items: Item[], paymentMethod: string, discount: number) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
}
calculateTotal(): number {
  return this._items.
      reduce((previousValue, item) => {
          const total = previousValue += item.prices;

          return total;
      }, 0)
}

calculateTotalWithDiscount(): number {
  return this.calculateTotal() * (1 - this._discount);
}
}

const cliente = new Cliente('João');

const sanduiche = new Item('Sandwiche Natural', 5.00);
const suco = new Item('Suco de Abacaxí', 5.00);
const sobremesa = new Item('Gelatina de Uva', 2.50);

const ordem = new Pedido(cliente, [sanduiche, suco, sobremesa], 'dinheiro', 0.10);
console.log(sanduiche)
console.log(ordem);
console.log('Valor normal: ', ordem.calculateTotal());
console.log('Valor com desconto: ', ordem.calculateTotalWithDiscount());