import { types } from "./articles.types";
import { get, post, del } from "../../data/modules/http";

const fetchArticlesSuccess = (payload) => ({ type: types.FETCH_ARTICLES_SUCCESS, payload });
const fetchArticlesFailure = (payload) => ({ type: types.FETCH_ARTICLES_FAILURE, payload });

const postArticlesSuccess = () => ({ type: types.POST_ARTICLES_SUCCESS });
const postArticlesFailure = (payload) => ({ type: types.POST_ARTICLES_FAILURE, payload });

const deleteArticlesSuccess = () => ({ type: types.DELETE_ARTICLES_SUCCESS });
const deleteArticlesFailure = (payload) => ({ type: types.DELETE_ARTICLES_FAILURE, payload });

export const fetchArticlesRequest = (dispatch) => {
    get("http://localhost:5000/articles")
        .then((response) => dispatch(fetchArticlesSuccess(response.data)))
        .catch((error) => dispatch(fetchArticlesFailure(error.message)));
};

export const postArticleRequest = (payload) => (dispatch) => {
    post("http://localhost:5000/articles", payload)
        .then(() => {
            dispatch(postArticlesSuccess());
            window.alert("✅ posted Successfully");
        })
        .catch((error) => {
            dispatch(postArticlesFailure(error.message));
            window.alert("❌ Failed to post");
        });
};

export const deleteArticleRequest = (payload) => (dispatch) => {
    del("http://localhost:5000/articles", payload)
        .then(() => {
            dispatch(deleteArticlesSuccess());
            window.alert("✅ Deleted Successfully");
        })
        .catch((error) => {
            dispatch(deleteArticlesFailure(error.message));
            window.alert("❌ Failed to failed");
        });
};
