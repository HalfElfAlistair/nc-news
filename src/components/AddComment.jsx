import { useState } from "react";

const AddComment = ({setCommentsList, setCommentCount}) => {

    const [commentText, setCommentText] = useState("");

    return (
        <form id="add-comment" onSubmit={(e) => {
            e.preventDefault();
            setCommentsList((currComments) => {
                let copiedComments = [...currComments];
                const newCommentId = copiedComments[currComments.length-1].comment_id += 1;
                return [...currComments, {body: commentText, author: "guest", comment_id: newCommentId}]  
            })
            setCommentCount((currCount) => {
                return currCount += 1;
            })
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