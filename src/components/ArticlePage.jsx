import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import { useParams } from 'react-router-dom';
import {dateExtract} from "../utils/helpers";
import Votes from './Votes';

const ArticlePage = ({setError}) => {

    const {id} = useParams();

    const [isLoading, setIsLoading] = useState(true);

    const [article, setArticle] = useState();

    useEffect(() => {
        getArticleById(id)
            .then((articleFromApi) => {
                setArticle(articleFromApi);
                setIsLoading(false)
            })
            .catch((err) => {
                setError({ err });
            })
    }, [id, setError])

    if (isLoading) {
        return <div className="loading">
                <p>One article coming right up...</p>
            </div>
    } else {
        return <section id="article-page">
            <div className="article-info">
                <h2>{article.title}</h2>
                <p>By {article.author}</p>
                <p>Posted on {dateExtract(article.created_at)}</p>
                <p className="content">{article.body}</p>
                <Votes article={article} setError={setError} />
                <div className="article-comments">
                    <p>Comments</p>
                    <p>Comment Count: {article.comment_count}</p>
                    <div>
                        <p className="content">Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment</p>
                        <button>delete</button>
                    </div>
                    <div>
                        <button>view more...</button>
                        <label>Add a comment</label>
                        <input type="text"></input>
                        <button>Post</button>
                    </div>
                </div>
            </div>
            
        </section>
    }

    
}

export default ArticlePage;