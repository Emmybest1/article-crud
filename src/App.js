import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./structures/header/header.component";
import Parent from "./components/parent/parent.component";
import Post from "./pages/post/post.component";
import SingleArticle from "./pages/article/article.component";
import LeftNavigation from './components/left-navigation/left-navigation.component'

import "./app.style.scss";

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Parent} />
                    <Route exact path="/post-article" component={Post} />
                    <Route exact path="/article" component={SingleArticle} />
                    <Route exact path="/testing" component={LeftNavigation} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
