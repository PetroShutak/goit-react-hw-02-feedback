// import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
  </div>
);

export const Children = ({ children }) => (
  <div>
    {children}
  </div>
);
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};