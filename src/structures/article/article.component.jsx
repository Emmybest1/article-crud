import React from "react";
import PropTypes from "prop-types";
import { withRouter, NavLink } from "react-router-dom";
import "./article.style.scss";

const Article = ({ className, title, body, more }) => {
    return (
        <article className={className}>
            <h4>{title}</h4>
            <p>{body}</p>
            <NavLink to={more}>Read more...</NavLink>
        </article>
    );
};

Article.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    more: PropTypes.string.isRequired,
};

Article.defaultProps = {
    className: "article",
};
export default withRouter(Article);
