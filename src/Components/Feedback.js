import React, { Component } from "react";

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
        <h3>Statistics</h3>
        <p>Good: 0</p>
        <p>Neutral: 0</p>
        <p>Bad: 0</p>
      </div>
    );
  }
}
