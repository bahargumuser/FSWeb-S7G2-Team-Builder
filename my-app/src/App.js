import { useState } from "react";
import "./App.css";
import Form from "./Form";
import logo from "./logo.svg";

export default function Form() {
  const [data, setData] = useState({
    isim: "",
    soyisim: "",
    email: "",
    rol: "",
  });
  const changeHandler = (e) => {
    console.log(e.target.value)
    const {value, id} = event.target
    console.log(event);
    const newState = {...data [id]: value}
    setData(newState);
  }
   console.log("uye", uye);
  return <div className="App">Oldu mu acaba</div>;
}

export default App;
