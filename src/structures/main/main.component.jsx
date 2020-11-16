import React from "react";
import PropTypes from "prop-types";

import "./main.style.scss";

const Main = ({ children, className, ...otherProps }) => {
    return (
        <main className={className} {...otherProps}>
            {children}
        </main>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Main.defaultProps = {
    className: "container",
};
export default Main;
