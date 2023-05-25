import { Component } from "react";
import css from './Footer.module.css';
import PropTypes from 'prop-types';

export class Footer extends Component {
    render() {
        return (
        <div className={css.footer_container}>
            <p className={css.footer}>© 2023 Feedback. All rights reserved. Created by Petro Shutak</p>
        </div>
        );
    }
    }

Footer.propTypes = {
    children: PropTypes.node,
};
