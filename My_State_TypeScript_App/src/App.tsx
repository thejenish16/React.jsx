import { useState } from "react";

function App() {

  let name: string = "jenish";
  let age: number = 18;
  let isTheme: Boolean = false;
  let phone: Number | String = 0;

  let array: number[] | string[] = [10, 20, 30, 40, 50, "Hello"];

  const [counter, setCounter] = useState<number>(0);

  name += "pardava";
  phone = 1234567890;

  return <>
    <h1>Hello</h1>

    <h1>Counter: {counter}</h1>

    <button onClick={() => { setCounter(counter + 1) }}>+</button>

    <p>Name : {name}</p>
    <p>Age : {age.toString()}</p>
    <p>Phone : {phone.toString()}</p>
    <p>Theme : {isTheme ? "Light" : "Dark"}</p>

    <p>Array : {array}</p>
  </>
}

export default App;