import React from "react";
import PropTypes from "prop-types";

export const Statistics = ({
  positiveFeedback,
  neutralFeedback,
  negativeFeedback,
  countSum,
  countPercentage,
}) => {
  return (
    <>
      <p>Good: {positiveFeedback}</p>
      <p>Neutral: {neutralFeedback}</p>
      <p>Bad: {negativeFeedback}</p>
      <p>Total: {countSum}</p>
      <p>Positive feedback: {countPercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  positiveFeedback: PropTypes.number,
  neutralFeedback: PropTypes.number,
  negativeFeedback: PropTypes.number,
  countSum: PropTypes.number,
  countPercentage: PropTypes.number,
};
