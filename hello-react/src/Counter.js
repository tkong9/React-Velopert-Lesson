import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>Fixed Number: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1
              },
              () => {
                console.log('You just called setState.');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
