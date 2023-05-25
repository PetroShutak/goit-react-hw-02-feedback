import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={css.feedbackOptions}>
        {options.map(option => (
          <button
            key={option}
            className={css.button}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

// import PropTypes from 'prop-types';
// import css from './FeedbackOptions.module.css';

// export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
//   <div className={css.feedbackOptions}>
//     {options.map((option) => (
//       <button
//         key={option}
//         className={css.button}
//         onClick={() => onLeaveFeedback(option)}
//       >
//         {option}
//       </button>
//     ))}
//   </div>
// );

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
