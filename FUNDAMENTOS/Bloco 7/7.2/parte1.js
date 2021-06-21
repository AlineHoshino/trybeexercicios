const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const pessoa = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const address= order.adress;//sugestao do zeze criar uma const adress e depois chamar ela, para o restante.
  const street = address.street;
  const número = address.number;
  const apartment= address.apartment;

  console.log(`Olá ${pessoa}, entrega para: ${name} , telefone : ${phoneNumber}, Rua : ${street}, número: ${número} , apartamento:${apartment}`)
}

customerInfo(order);

const orderModifier = (order) => {
  const newClient=order.name= "Luiz da Silva";/* reescrevendo e passando um novo valor */
  const pizza= Object.keys(order.order.pizza)/* os dois indices de pizza */
  const drink = order.order.drinks.coke.type;
  const payment = order.payment.total= 50;
  
  console.log( `Olá ${newClient}, o total do seu pedido de ${pizza} e ${drink} é R$${payment},00 reais.`)
}
orderModifier(order);



