import PropTypes from 'prop-types';
import css from './Notification.module.css';
import { getRandomColor } from '../../utils/getRandom';

export const Notification = ({ message }) => (
  <div className={css.notification} style={{backgroundColor:  getRandomColor()}}>
    <p>{message}</p>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
