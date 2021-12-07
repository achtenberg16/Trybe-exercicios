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
            marguerita: {
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

const customerInfo = (p1) => {
    // Adicione abaixo as informações necessárias.
    let objeto = p1;
    // console.log(objeto)
    console.log(`Olá ${objeto['order']['delivery']['deliveryPerson']}, entrega para: ${objeto['name']}, ${objeto['order']['phoneNumber']}, ${objeto.address.street}, ${objeto.address.number}, AP:${objeto.address.apartment}`)
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  
  }
  
  orderModifier(order);     