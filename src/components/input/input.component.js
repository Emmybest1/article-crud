import React from "react";
import PropTypes from "prop-types";

import "./input.style.scss";

const Input = ({ id, type, labelText, ...otherProps }) => {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            {type === "textarea" ? <textarea id={id} rows="10" {...otherProps}></textarea> : <input type={type} id={id} {...otherProps} />}
        </>
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    otherProps: PropTypes.shape({
        onClick: PropTypes.func,
    }),
};

Input.defaultProps = {
    type: "text",
};
export default Input;
