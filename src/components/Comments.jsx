import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";


const Comments = ({article, setError, currentUser}) => {

    const [commentsList, setCommentsList] = useState([]);
    const [commentsView, setCommentsView] = useState("Show Comments");
    const [isLoading, setIsLoading] = useState(true);
    const [commentCount, setCommentCount] = useState(0);

    useEffect(() => {
        getComments(article.article_id)
            .then((commentsFromApi) => {
                setCommentsList(commentsFromApi)
                setCommentCount(article.comment_count)
                setIsLoading(false)
            })
            .catch((err) => {
                setError({ err });
            });
    }, [article.article_id, setError, article.comment_count])

    const showHideComments = (viewState) => {
        return (viewState === "Show Comments") 
        ? 
            <></> 
        : 
        (
            <ul>
                {commentsList.map((commentData) => {
                    return <CommentCard key={commentData.comment_id} commentData={commentData} currentUser={currentUser} />
                })}
            </ul>
        )
    }

    if (isLoading) {
        return (
            <div className="loading">
                <p>Just fetching the articles now...</p>
            </div>
        )
    } else {
        return (
            <div className="article-comments">
                <h3>Comments</h3>
                <p>{commentCount} comments</p>
                <button className="view-toggle" onClick={(e) => {
                    (commentsView === "Show Comments") 
                    ? 
                    setCommentsView("Hide Comments") 
                    : 
                    setCommentsView("Show Comments")
                    }}>{commentsView}</button>
                    <div id="comments-feed">
                        {showHideComments(commentsView)}
                    </div>
                    <AddComment setCommentsList={setCommentsList} setCommentCount={setCommentCount} article={article} setError={setError} currentUser={currentUser} />
            </div>
        )
    }
}

export default Comments;