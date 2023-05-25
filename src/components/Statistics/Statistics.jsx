import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={css.statistics}>
        <p className={css.statItem}>Good: {good}</p>
        <p className={css.statItem}>Neutral: {neutral}</p>
        <p className={css.statItem}>Bad: {bad}</p>
        <p className={css.statItem}>Total: {total}</p>
        <p className={css.statItem}>Positive Feedback: {positivePercentage}%</p>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

// import PropTypes from 'prop-types';
// import css from './Statistics.module.css';

// export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
//   <div className={css.statistics}>
//     {/* <h2 className={css.title_stat}>Statistics</h2> */}
//     <p className={css.statItem}>Good: {good}</p>
//     <p className={css.statItem}>Neutral: {neutral}</p>
//     <p className={css.statItem}>Bad: {bad}</p>
//     <p className={css.statItem}>Total: {total}</p>
//     <p className={css.statItem}>Positive Feedback: {positivePercentage}%</p>
//   </div>
// );

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// };
