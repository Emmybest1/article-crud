import React, { useState } from "react";
import { Link } from "react-router-dom";

import Expandable from "../expandable/expandable.component";
import Aside from "../../structures/aside/aside.component";
import "./left-navigation.style.scss";

const LeftNavigation = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="left-nav-container">
            {expanded && (
                <Aside>
                    <ul className="left-nav-items-container">
                        <li>
                            <Link to="" className="anchor">
                                Content One
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="anchor">
                                Content Two
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="anchor">
                                Content Three
                            </Link>
                        </li>
                    </ul>
                </Aside>
            )}

            <Expandable>
                <span className="expand-btn">
                    <p
                        onClick={() => {
                            expanded ? setExpanded(false) : setExpanded(true);
                        }}
                    >
                        click
                    </p>
                </span>
            </Expandable>
        </div>
    );
};

export default LeftNavigation;
