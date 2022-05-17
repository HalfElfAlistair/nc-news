import { MdDelete } from "react-icons/md";

const CommentCard = ({commentData}) => {

    return (
        <div className="comment-card">
            <div className="comment-content">
                <p className="comment-author"><strong>{commentData.author}</strong>: </p>
                <p className="comment-body">{commentData.body}</p>
            </div>
            <button aria-label="delete"><MdDelete/></button>
        </div>
    )   
}

export default CommentCard;