import { MdDelete } from "react-icons/md";
import { useState } from "react";
import DeletionChecker from "./DeletionChecker";
import "../assets/CommentCard.css";

const CommentCard = ({commentData, currentUser, setCommentCount, setError}) => {

    const [deleteStatus, setDeleteStatus] = useState(false);
    const [checkScreen, setCheckScreen] = useState(false);

    const deleteCheck = () => {
        setCheckScreen(true);
        setDeleteStatus(true);
    }

    return !deleteStatus 
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
            {checkScreen ? <DeletionChecker setDeleteStatus={setDeleteStatus} setCommentCount={setCommentCount} commentData={commentData} setCheckScreen={setCheckScreen} setError={setError} /> : <p>Comment deleted.</p>}
        </div>
    )
}

export default CommentCard;