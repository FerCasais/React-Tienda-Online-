import React from "react";
import { useState , useEffect} from "react";
import "./Contador.css";

function Contador () {

    const [date, setDate] = useState();

    console.log(date)

    const [count, setCount] = useState(0)
   
    console.log(count)

   

function handler(){

    setCount(count + 1)

    setDate(Date)

 
}
    return (
        <>
        <div className="contador">
       
        <button type="button" onClick={handler}>Click me</button>
         <h5>Clicks: {count}</h5>
         <p>{date}</p>
         </div>
</>
    )




}


export default Contador;