/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useSearch } from "../../hooks/useSearch";
import { fetchArticleRequest, deleteArticleRequest } from "../../redux/root.actions";
import Main from "../../structures/main/main.component";
import Button from "../../components/button/button.component";
import "./article.style.scss";

const SingleArticle = (props) => {
    const singleArticle = useSelector((state) => state.singleArticle.article);
    const dispatch = useDispatch();
    const idSearchParam = useSearch(props.location.search, "id");

    useEffect(() => {
        dispatch(fetchArticleRequest(idSearchParam));
    }, []);

    return (
        <Main>
            <article>
                {singleArticle.map((article) => (
                    <Fragment key={`${article.id} ${article.title}`.trim()}>
                        <h4>{article.title}</h4>
                        <p>{article.body}</p>
                        <Button
                            onClick={() => {
                                dispatch(deleteArticleRequest(idSearchParam));
                                props.history.push("/");
                            }}
                        >
                            Delete
                        </Button>
                    </Fragment>
                ))}
            </article>
        </Main>
    );
};

export default SingleArticle;
