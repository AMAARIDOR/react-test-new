import userEvent from "@testing-library/user-event";
import "./index.css";

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

let content;
let isLoggedIn = true;

if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}

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
      <div>{content}</div>
      <div>
        <AboutPage />
      </div>
    </>
  );
}

export default App;
