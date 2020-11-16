import React from "react";

import { useSearch } from "../../hooks/useSearch";
import Main from "../../structures/main/main.component";
import "./article.style.scss";

const Article = (props) => {
    const idSearchParam = useSearch(props.location.search, "id");
    console.log(props, idSearchParam);

    return <Main>Article One</Main>;
};

export default Article;
