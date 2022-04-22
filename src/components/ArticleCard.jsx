import { Link } from 'react-router-dom';
import {dateExtract} from "../utils/helpers";

const ArticleCard = ({ articleData }) => {
 
    return <Link to={`/articles/${articleData.article_id}`} >
        <li className="article-card">
            <h2>{articleData.title}</h2>
            <p>By: {articleData.author}</p>
            <p>On: {dateExtract(articleData.created_at)}</p>
            <p>Votes: {articleData.votes}</p>
        </li>
    </Link>
     
}

export default ArticleCard;