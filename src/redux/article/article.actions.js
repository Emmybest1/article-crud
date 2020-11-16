import { get_single_resource } from "../../data/modules/http";
import { types } from "../article/article.types";

const fetchArticleSuccess = (payload) => ({
    type: types.FETCH_ARTICLE_SUCCESS,
    payload,
});

const fetchArticleFailure = (payload) => ({
    type: types.FETCH_ARTICLE_FAILURE,
    payload,
});

export const fetchArticleRequest = (id) => (dispatch) => {
    get_single_resource("http://localhost:5000/articles", id)
        .then((response) => dispatch(fetchArticleSuccess(response.data)))
        .catch((error) => dispatch(fetchArticleFailure(error.message)));
};
