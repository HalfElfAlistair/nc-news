import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import { useParams } from 'react-router-dom';
import {dateExtract} from "../utils/helpers";
import Votes from './Votes';
import Comments from './Comments';

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
                <Comments article={article} setError={setError} />
            </div>
            
        </section>
    }

    
}

export default ArticlePage;