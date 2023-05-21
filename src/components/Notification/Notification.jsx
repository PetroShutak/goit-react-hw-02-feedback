import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => (
  <div className={css.notification}>
    <p>{message}</p>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
