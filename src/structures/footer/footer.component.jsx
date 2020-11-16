import React from "react";
import PropTypes from "prop-types";

const Footer = ({ children, ...otherProps }) => {
    return (
        <footer {...otherProps}>
            <span>
                &copy; <time>{new Date().getFullYear()}</time>
            </span>
        </footer>
    );
};

Footer.propTypes = {
    children: PropTypes.node,
};
export default Footer;
