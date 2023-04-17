import userEvent from "@testing-library/user-event";
import "./index.css";

function MyButton() {
  return <button>I'm a button</button>;
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
        <AboutPage />
      </div>
    </>
  );
}

export default App;
