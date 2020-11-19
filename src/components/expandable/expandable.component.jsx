import React from "react";
import PropTypes from "prop-types";

import "./expandable.style.scss";
const Expandable = ({ children }) => {
    return <div className="expandable-bar">{children}</div>;
};

Expandable.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Expandable;
