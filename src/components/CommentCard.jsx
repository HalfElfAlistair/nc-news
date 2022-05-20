import { MdDelete } from "react-icons/md";

const CommentCard = ({commentData, currentUser}) => {

    return (
        <div className={commentData.comment_id === "newComment" ? "optimistic-comment-card" : "comment-card"}>
            <div className="comment-content">
                <p className="comment-author"><strong>{commentData.author}</strong>: </p>
                <p className="comment-body">{commentData.body}</p>
            </div>
            {currentUser === commentData.author ? <button aria-label="delete"><MdDelete/></button> : <></>}
        </div>
    )   
}

export default CommentCard;