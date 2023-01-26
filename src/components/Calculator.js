import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const intialData = { total: 0, next: null, operation: null };
  const [input, setInput] = useState(intialData);

  const eventHandler = (e) => {
    const btnClicked = e.target.innerText;
    const result = calculate(input, btnClicked);
    setInput(result);
  };
  const { total, operation, next } = input;

  return (

    <div className="container">
      <div className="sero">
        {total}
        {operation}
        {next}
      </div>
      <button type="button" className="border gray" onClick={eventHandler}>AC</button>
      <button type="button" className="border " onClick={eventHandler}> &#43;/&minus; </button>
      <button type="button" className="border " onClick={eventHandler}>%</button>
      <button type="button" className="border orange " onClick={eventHandler}>&divide;</button>

      <button type="button" className="border gray" onClick={eventHandler}>7</button>
      <button type="button" className="border " onClick={eventHandler}> 8 </button>
      <button type="button" className="border gray" onClick={eventHandler}>9</button>
      <button type="button" className="border orange" onClick={eventHandler}>&times;</button>

      <button type="button" className="border gray" onClick={eventHandler}>4</button>
      <button type="button" className="border " onClick={eventHandler}> 5 </button>
      <button type="button" className="border gray" onClick={eventHandler}>6</button>
      <button type="button" className="border orange " onClick={eventHandler}>-</button>

      <button type="button" className="border gray" onClick={eventHandler}>1</button>
      <button type="button" className="border " onClick={eventHandler}>2 </button>
      <button type="button" className="border gray" onClick={eventHandler}>3</button>
      <button type="button" className="border orange " onClick={eventHandler}>+</button>

      <button type="button" className="border span " onClick={eventHandler}>0 </button>
      <button type="button" className="border gray" onClick={eventHandler}>.</button>
      <button type="button" className="border " onClick={eventHandler}>=</button>

    </div>

  );
}

export default Calculator;
