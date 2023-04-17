import userEvent from "@testing-library/user-event";
import "./index.css";
import { useState } from "react";

function AdminPanel() {
  return (
    <>
      <p>This is an admin panel</p>
    </>
  );
}

function LoginForm() {
  return (
    <>
      <p>This is a login form</p>
    </>
  );
}

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

function ShoppingList() {
  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));

  return <ul>{listItems}</ul>;
}

let content;
let isLoggedIn = false;

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Clicked {count} times</button>;
}

function AboutPage() {
  const user = {
    name: "Amaari",
    creature: "Homo-Sapien",
    age: 23,
    isEmployed: true,
  };

  return (
    <>
      <h1 className={user.creature}>About</h1>
      <p>
        Hello there. {user.name}
        <br /> How do you do?
      </p>
    </>
  );
}

function App() {
  return (
    <>
      <div>
        <h1>Welcome to my React App</h1>
        <MyButton />
      </div>
      <div>
        <ShoppingList />
      </div>
      <div>{isLoggedIn && <AdminPanel />}</div>
      <div>
        <AboutPage />
      </div>
    </>
  );
}

export default App;
