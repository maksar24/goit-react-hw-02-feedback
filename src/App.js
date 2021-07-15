import React, { Component } from "react";
import { FeedbackOptions } from "./Components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Components/Statistics/Statistics";
import { Section } from "./Components/Section/Section";
import { Notification } from "./Components/Notification/Notification ";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleEvaluate = (key) => {
    this.setState((prevState) => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    const mark = Object.keys(this.state);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={mark} onLeaveFeedback={this.handleEvaluate} />
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              positiveFeedback={good}
              neutralFeedback={neutral}
              negativeFeedback={bad}
              countSum={total}
              countPercentage={percentage}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </Section>
    );
  }
}

export default App;
