import { types } from "./articles.types";

export const initialState = {
    isLoading: true,
    error: "",
    articles: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ARTICLES_REQUEST:
            return { ...state, isLoading: true };

        case types.FETCH_ARTICLES_SUCCESS:
            return { ...state, isLoading: false, articles: action.payload };

        case types.FETCH_ARTICLES_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        case types.POST_ARTICLES_REQUEST:
            return { ...state, isLoading: true };

        case types.POST_ARTICLES_SUCCESS:
            return { ...state, isLoading: false };

        case types.POST_ARTICLES_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};
