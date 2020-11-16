import React from "react";
import PropTypes from "prop-types";
import "./button.style.scss";

const Button = ({ children, className, ...otherProps }) => {
    return (
        <button className={className} {...otherProps}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
export default Button;
