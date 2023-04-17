import "./index.css";

function MyButton() {
  return <button>I'm a button</button>;
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there.
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
