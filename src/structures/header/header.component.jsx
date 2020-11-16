import React from "react";

import "./header.style.scss";
const Header = () => {
    return (
        <header>
            <div className="wrapper" data-test="wrapper">
                <div>
                    <div className="logo">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/bg.png`} alt="" data-test="logo-img" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
