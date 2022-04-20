import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../utils/api";

const Articles = () => {

    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        getArticles()
            .then((articlesFromApi) => {
                setArticlesList(articlesFromApi);
            })
    }, [])

    return <div id="articles">
        <ul>
            {articlesList.map((articleData) => {
                return <ArticleCard key={articleData.article_id} articleData={articleData} />
            })}
        </ul>
    </div>
}

export default Articles;