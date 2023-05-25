import { Component } from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={css.section}>
        <h2 className={css.title_stat}>{title}</h2>
        {children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// import PropTypes from 'prop-types';
// import css from './Section.module.css';

// export const Section = ({ title, children }) => (
//   <div className={css.section}>
//     <h2 className={css.title_stat}>{title}</h2>
//     {children}
//   </div>
// );

// Section.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.node.isRequired,
// };
