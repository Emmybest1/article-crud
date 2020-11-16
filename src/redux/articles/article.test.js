import { types } from "./articles.types";
import { initialState, reducer } from "./articles.reducer";

describe("articles test", () => {
    it("should test articles reducer FETCH_ARTICLES_SUCCESS type", () => {
        const fetchSuccessAction = reducer(initialState, types.FETCH_ARTICLES_SUCCESS);

        expect(fetchSuccessAction).toEqual(initialState);
        expect(fetchSuccessAction.isLoading).toBe(true);
        expect(fetchSuccessAction.error.length).toBe(0);
        expect(fetchSuccessAction.articles.length).toBe(0);
    });

    it("should dispacth fetchArticleRequest", () => {
        const fetchRequestAction = reducer(initialState, types.FETCH_ARTICLES_REQUEST);

        console.log(fetchRequestAction);
    });
});
