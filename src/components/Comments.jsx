import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";


const Comments = ({article, setError}) => {

    const [commentsList, setCommentsList] = useState([]);
    const [commentsView, setCommentsView] = useState("Show Comments");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getComments(article.article_id)
            .then((commentsFromApi) => {
                setCommentsList(commentsFromApi)
                setIsLoading(false)
            })
            .catch((err) => {
                setError({ err });
            });
    }, [article.article_id, setError])

    const showHideComments = (viewState) => {
        return (viewState === "Show Comments") 
        ? 
            <></> 
        : 
        (
            <ul>
                {commentsList.map((commentData) => {
                    return <CommentCard key={commentData.comment_id} commentData={commentData} />
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
                <p>{article.comment_count} comments</p>
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
                <div>
                    <label>Add a comment</label>
                    <input type="text"></input>
                    <button>Post</button>
                </div>
            </div>
        )
    }
}

export default Comments;