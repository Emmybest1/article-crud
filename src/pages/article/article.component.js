/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useSearch } from "../../hooks/useSearch";
import { fetchArticleRequest } from "../../redux/article/article.actions";

import Main from "../../structures/main/main.component";
import "./article.style.scss";

const SingleArticle = (props) => {
    const singleArticle = useSelector((state) => state.singleArticle.article);
    const dispatch = useDispatch();
    const idSearchParam = useSearch(props.location.search, "id");

    useEffect(() => {
        dispatch(fetchArticleRequest(idSearchParam));
    }, []);

    console.log("Article", singleArticle);
    return (
        <Main>
            <article>
                {singleArticle.map((article) => (
                    <Fragment key={`${article.id} ${article.title}`.trim()}>
                        <h4>{article.title}</h4>
                        <p>{article.body}</p>
                    </Fragment>
                ))}
            </article>
        </Main>
    );
};

export default SingleArticle;
