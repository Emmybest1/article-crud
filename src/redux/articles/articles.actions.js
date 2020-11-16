import { types } from "./articles.types";

const fetchArticlesSuccess = (payload) => ({ type: types.FETCH_ARTICLES_SUCCESS, payload });
const fetchArticlesFailure = (payload) => ({ type: types.FETCH_ARTICLES_FAILURE, payload });

const postArticlesSuccess = () => ({ type: types.POST_ARTICLES_SUCCESS });
const postArticlesFailure = (payload) => ({ type: types.POST_ARTICLES_FAILURE, payload });

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
