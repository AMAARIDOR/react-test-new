import userEvent from "@testing-library/user-event";
import MyButton from "./Buttons";
import "./index.css";

export default function App() {
  return (
    <>
      <div>
        <h1>Counters that update separately</h1>
        <MyButton />
        <MyButton />
      </div>
    </>
  );
}
