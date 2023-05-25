import PropTypes from 'prop-types';
import css from './Notification.module.css';
import { getRandomColor } from '../../utils/getRandom';
import { Component } from 'react';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return (
      <div
        className={css.notification}
        style={{ backgroundColor: getRandomColor() }}
      >
        <p>{message}</p>
      </div>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

// import PropTypes from 'prop-types';
// import css from './Notification.module.css';
// import { getRandomColor } from '../../utils/getRandom';

// export const Notification = ({ message }) => (
//   <div className={css.notification} style={{backgroundColor:  getRandomColor()}}>
//     <p>{message}</p>
//   </div>
// );

// Notification.propTypes = {
//   message: PropTypes.string.isRequired,
// };
