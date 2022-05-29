import { deleteComment } from "../utils/api";
import "../assets/DeletionChecker.css";

const DeletionChecker = ({setDeleteStatus, deleteStatus, setCommentCount, commentData, setCheckScreen, checkScreen, setError}) => {

    const commentDelete = () => {
        setCommentCount((currCommentCount) => {
            return currCommentCount - 1;
        })
        deleteComment(commentData.comment_id)
            .catch((err) => setError({ err }))
    }

    return (
        <div className="page-intro">
            <p>Are you sure you wish to delete this comment?</p>
            <div id="buttons-area">
                <button id="yes-button" onClick={(e) => {
                    commentDelete()
                    setCheckScreen(false)
                }}>Yes</button>
                <button id="no-button" onClick={(e) => {
                    setCheckScreen(false)
                    setDeleteStatus(false)
                }}>No</button>
            </div>
        </div>
    )

}

export default DeletionChecker;