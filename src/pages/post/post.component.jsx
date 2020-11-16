import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postArticleRequest } from "../../redux/root.actions";
import { useUniqueIds } from "../../hooks/useUniqueIds";
import Main from "../../structures/main/main.component";
import Input from "../../components/input/input.component";
import "./post.style.scss";

const initialArticleState = {
    title: "",
    body: "",
};

const Post = () => {
    const [titleId, contentId, resetId, submitId] = useUniqueIds(4);
    const [articleForm, setArticleForm] = useState(initialArticleState);
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(postArticleRequest(articleForm));
        setArticleForm(initialArticleState);
    };

    const onChangeHandler = (e) => {
        setArticleForm({
            ...articleForm,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <Main>
            <h1>Post Articles</h1>
            <form onSubmit={onSubmitHandler}>
                <Input type="text" id={titleId} labelText="Title" name="title" onChange={onChangeHandler} />
                <Input type="textarea" id={contentId} labelText="Content" name="body" onChange={onChangeHandler} />
                <Input type="reset" id={resetId} labelText="" aria-label="Reset form" />
                <Input type="submit" id={submitId} labelText="" aria-label="Submit article" value="Submit" />
            </form>
        </Main>
    );
};

export default Post;
