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

        default:
            return state;
    }
};
