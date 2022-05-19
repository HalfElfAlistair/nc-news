import { useState } from "react";
import { postComment } from "../utils/api";

const AddComment = ({setCommentsList, setCommentCount, article, setError}) => {

    const [commentText, setCommentText] = useState("");

    return (
        <form id="add-comment" onSubmit={(e) => {
            e.preventDefault();
            setCommentsList((currComments) => {
                return [...currComments, {body: commentText, author: "grumpy19", comment_id: "newComment"}]
            })
            setCommentCount((currCount) => {
                return currCount += 1;
            })
            postComment(article.article_id, {body: commentText, username: "grumpy19"})
                .catch((err) => {
                    setError({ err })})
            setCommentText("");
            }}>
            <input id="comment-input" type="text" onFocus={(e) => {
                e.target.value = commentText;
            }}
            onChange={(e) => {
                setCommentText(e.target.value)
            }}
            onBlur={(e) => {
                (commentText) ? e.target.value = commentText : e.target.value = "add your comment...";
            }}
            defaultValue="add your comment..."></input>
            {(commentText) ? <button id="comment-submit">Post</button> : <></>}
        </form>
    )
}

export default AddComment;