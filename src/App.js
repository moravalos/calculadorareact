import { useState } from "react";

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/","*","+","-","."];


  const update = value => {
    if(
      ops.includes(value) && calc === "" ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ){
      return;
    }
    setCalc(calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }


const createDigits = () => {
  const digits = [];

  for (let i=1; i < 10; i++){
    digits.push(
      <button 
        onClick={() => update(i.toString())}
        key={i}>
        {i}
      </button>
    )
  }
  return digits;
}

const calculado = () => {
  setCalc(eval(calc).toString());
}

const deleted = () => {
if(calc == ""){
  return;
}
const value = calc.slice(0, -1);

setCalc(value);
}
  return (
    <div className="App">
      <div className="calculadora">
        <div className="display">
         {result ? <span>({result})</span> : ""}
         &nbsp;
         {calc || "0"}
          <div className="digitos">
            {createDigits()}
            <button onClick={() => update(".")}>.</button>
            <button onClick={calculado}>=</button>
            <button onClick={() => update("0")}>0</button>
          </div>
          <div className="operadores">
            <button onClick={() => update("/")}>/</button>
            <button onClick={() => update("*")}>*</button>
            <button onClick={() => update("+")}>+</button>
            <button onClick={() => update("-")}>-</button>

            <button onClick={deleted}>CE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
