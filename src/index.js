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
  
  useEffect(() => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    setIsOpen(hour >= openHour && hour <= closeHour);
  }, []); // Dependency array is empty, so this runs only once when the component mounts

    return (
        <div className='container'>                  
            <Header isOpen={isOpen}/>
            <Menu/>
            <Footer isOpen={isOpen}/>
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
    return (
        <main className='menu'>
          <h2>Our Menu</h2>
        {pizzaData.map((pizza, index) => {    
          return (
              
            <Pizza
              key={index}
              name={ pizza.name }
              photoName={ pizza.photoName }
              ingredients={ pizza.ingredients }
              price={ pizza.price }
            />    
            )           
          })}
      </main>
    )
}

function Footer({isOpen}) {

    return (
        <footer className='footer'>
            {new Date().toLocaleTimeString()}.
            { isOpen ? "We're currently open!" : "Sorry, we're closed"}
        </footer>
    )
}

function Pizza({name, photoName, ingredients, price}) {
    return (
        <div className='pizza'>
        <img src={photoName } alt={name} />
        <h3>{ name }</h3>
        <p>{ingredients }</p>
        <span>${ price }</span>
        </div>
    )

}

// React version 18 +
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
        <App />
    </React.StrictMode>);