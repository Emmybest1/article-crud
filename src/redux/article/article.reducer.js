import { types } from "../article/article.types";

const initialState = {
    isLoading: true,
    error: "",
    article: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ARTICLE_REQUEST:
            return { ...state, isLoading: true, error: "", article: {} };

        case types.FETCH_ARTICLE_SUCCESS:
            return { ...state, isLoading: false, error: "", article: action.payload };

        case types.FETCH_ARTICLE_FAILURE:
            return { ...state, isLoading: false, error: action.payload, article: {} };

        case types.DELETE_ARTICLE_REQUEST:
            return { ...state, isLoading: true };

        case types.DELETE_ARTICLE_SUCCESS:
            return { ...state, isLoading: false };

        case types.DELETE_ARTICLE_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};
