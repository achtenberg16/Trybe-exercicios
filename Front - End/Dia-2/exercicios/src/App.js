import React from 'react';
import Image from './Components/Image';
import Order from './Components/Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: 'cena@gmail.com',
      product: 'Razer Headphone',
      price: {
        value: 99.99,
        currency: 'dollars',
      },
    };

    const energyDrink = {
      id: 77,
      user: 'cena@gmail.com',
      product: 'Monster 500mL',
      price: {
        value: 9.99,
        currency: 'dollars',
      },
    };

    return (
      <div className='App'>
        <Image
          source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
          alternativeText='alternativeText'
        ></Image>
        <Order order={energyDrink}></Order>
        <Order order={headphone}></Order>
      </div>
    );
  }
}

export default App;
