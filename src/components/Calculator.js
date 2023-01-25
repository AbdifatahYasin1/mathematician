import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (

      <div className="container">
        <div className="sero">0</div>
        <div className="border gray">AC</div>
        <div className="border "> &#43;/&minus; </div>
        <div className="border ">%</div>
        <div className="border orange ">&divide;</div>

        <div className="border gray">7</div>
        <div className="border "> 8 </div>
        <div className="border gray">9</div>
        <div className="border orange">&times;</div>

        <div className="border gray">4</div>
        <div className="border "> 5 </div>
        <div className="border gray">6</div>
        <div className="border orange ">-</div>

        <div className="border gray">1</div>
        <div className="border ">2 </div>
        <div className="border gray">3</div>
        <div className="border orange ">+</div>

        <div className="border span ">0 </div>
        <div className="border gray">.</div>
        <div className="border ">=</div>

      </div>

    );
  }
}

export default Calculator;
