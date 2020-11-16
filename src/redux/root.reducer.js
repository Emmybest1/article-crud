import { combineReducers } from "redux";

import { reducer as articlesReducer } from "./articles/articles.reducer";
import { reducer as articleReducer } from "./article/article.reducer";

export const rootReducer = combineReducers({ articles: articlesReducer, singleArticle: articleReducer });
