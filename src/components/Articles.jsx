import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../utils/api";
import "../assets/Articles.css";

const Articles = ({queryState, topic, topicSlug, setError}) => {

    const [articlesList, setArticlesList] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticles(queryState)
            .then((articlesFromApi) => {
                setArticlesList(articlesFromApi);
                setIsLoading(false)
            })
            .catch((err) => {
                setError({ err });
            })
    }, [queryState, setError])

    if (isLoading) {
        return (
            <div className="loading">
                <p>Just fetching the articles now...</p>
            </div>
        ) 
    } else {
        return (
            <div id="articles">
                <ul>
                    {articlesList.map((articleData) => {
                        return <ArticleCard key={articleData.article_id} articleData={articleData} topic={topic} id={articleData.article_id} topicSlug={topicSlug}/>
                    })}
                </ul>
            </div>
        ) 
    }

    
}

export default Articles;