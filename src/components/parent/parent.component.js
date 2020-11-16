import React, { useEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchArticlesRequest } from "../../redux/root.actions";
import Home from "../../pages/home/home.component";

const Parent = () => {
    const articles = useSelector((state) => state.articles.articles);
    const isLoading = useSelector((state) => state.isLoading);
    const error = useSelector((state) => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticlesRequest);
    }, [dispatch]);

    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>{!articles.length && !isLoading ? <p style={errorStyle}>{error}</p> : <Home articles={articles} />}</Suspense>
        </>
    );
};

const errorStyle = {
    color: "red",
};
export default Parent;
