import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {

  const [isOpen, setIsOpen] = useState(false);
  const openHour = 12;
  const closeHour = 23;
  
  useEffect(() => {
    const hour = new Date().getHours();
    
    setIsOpen(hour >= openHour && hour <= closeHour);
  }, []); // Dependency array is empty, so this runs only once when the component mounts

    return (
        <div className='container'>                  
            <Header isOpen={isOpen}/>
            <Menu/>
            <Footer isOpen={isOpen}
              closeHour={closeHour}
              openHour={openHour}
            />
        </div>
    )
}

function Header({isOpen}) {

  return (
   <div className='header'>  
      <h1>
        Fast React Pizza Co.
      </h1>

      <h2>{ isOpen ? "We're currently open!" : "Sorry, we're closed"}</h2>
   </div>
  )
}

function Menu() {

  const numPizzas = pizzaData.length;

    return (
        <main className='menu'>
          <h2>Our Menu</h2>
          
        {numPizzas > 0 ? (
          <>
            <p>
              Authentic italian cuisine. 6 creative dishes to choose from. All from our stone oven,
              all organic, all delicious
            </p>
          
          <ul className='pizzas'>         
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={ pizza } key={ pizza.name } />
            ))}
            </ul>
            </>
        ) : (
            <p>We're still working on our menu. Please come back later</p>
        )
      }
        </main>
    )
}


function Pizza({ pizzaObj }) {

    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
          <img src={pizzaObj.photoName } alt={pizzaObj.name} />
          <h3>{ pizzaObj.name }</h3>
          <p>{pizzaObj.ingredients }</p>
          <span>{ pizzaObj.soldOut ? 'SOLDOUT' : `$${pizzaObj.price}` }</span>
        </li>
    )

}

function Footer({ isOpen, openHour, closeHour }) {
  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (           
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
        )}
    </footer>
  );
}

function Order({closeHour}) {
  return ( 
    <div className='order'>             
      <p>
        We're open until {closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}


// React version 18 +
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
        <App />
</React.StrictMode>);
