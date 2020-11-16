import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Main from "../../structures/main/main.component";
import Button from "../../components/button/button.component";
import Article from "../../structures/article/article.component";
import "./home.style.scss";

const content = `
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum alias commodi
                earum dolore voluptas similique. Nesciunt in voluptas, minima, recusandae nobis
                totam reprehenderit voluptates voluptate distinctio perferendis saepe culpa iste!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum alias commodi
                earum dolore voluptas similique. Nesciunt in voluptas, minima, recusandae nobis
                totam reprehenderit voluptates voluptate distinctio perferendis saepe culpa iste!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum alias commodi
                earum dolore voluptas similique. Nesciunt in voluptas, minima, recusandae nobis
                totam reprehenderit voluptates voluptate distinctio perferendis saepe culpa iste!`;

const Home = ({ history, articles }) => {
    console.log(history);
    return (
        <Main>
            <h2 data-test="post-heading">Posts</h2>
            <p>{content}</p>
            <Button onClick={() => history.push("/post-article")}>Post Articles</Button>

            {articles.map((article) => (
                <Fragment key={article.title.toString()}>
                    <h3 className="articles">Articles</h3>
                    <Article title={article.title} body={article.body.slice(0, 150)} more={`/article?id=${article.id}`} />
                </Fragment>
            ))}
        </Main>
    );
};
Home.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func,
    }).isRequired,
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
        }).isRequired
    ),
};
export default withRouter(Home);
