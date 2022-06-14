function App() {

const createDigits = () => {
  const digits = [];

  for (let i=1; i < 10; i++){
    digits.push(
      <button key={i}>{i}</button>
    )
  }
  return digits;
}
  return (
    <div className="App">
      <div className="calculadora">
        <div className="display">
          <span>0</span>
          <div className="digitos">
            {createDigits()}
            <button>.</button>
            <button>=</button>
            <button>0</button>
          </div>
          <div className="operadores">
            <button>/</button>
            <button>*</button>
            <button>+</button>
            <button>-</button>

            <button>CE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
