import React from "react";
import PropTypes from "prop-types";

import "./aside.style.scss";

const Aside = ({ children }) => {
    return <aside>{children}</aside>;
};

Aside.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Aside;
