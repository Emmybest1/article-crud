import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./structures/header/header.component";
import Parent from "./components/parent/parent.component";
import Post from "./pages/post/post.component";
import Article from "./pages/article/article.component";
import "./app.style.scss";

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Parent} />
                    <Route exact path="/post-article" component={Post} />
                    <Route exact path="/article" component={Article} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
