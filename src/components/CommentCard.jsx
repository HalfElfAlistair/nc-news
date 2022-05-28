import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { deleteComment } from "../utils/api";
import "../assets/CommentCard.css";

const CommentCard = ({commentData, currentUser, setError}) => {

    const [deleteStatus, setDeleteStatus] = useState("active");

    const deleteCheck = () => {
        setDeleteStatus("deleted")
        deleteComment(commentData.comment_id)
            .catch((err) => setError({ err }))
    }

    return deleteStatus === "active" 
    ? 
    (
        <div className={commentData.comment_id === "newComment" ? "optimistic-comment-card" : "comment-card"}>
            <div className="comment-content">
                {currentUser === commentData.author 
                ? <button className="icon-button" aria-label="delete" onClick={(e) => deleteCheck()} ><MdDelete/></button> 
                : <></>}
                <p className="comment-author"><strong>{commentData.author}</strong>: </p>
                <p className="comment-body">{commentData.body}</p>
            </div>
        </div>
    )
    :
    (
        <div className="comment-card">
            <p>Comment deleted.</p>
        </div>
    )
}

export default CommentCard;