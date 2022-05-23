import { Link } from 'react-router-dom';
import {dateExtract} from "../utils/helpers";

const ArticleCard = ({ articleData }) => {
 
    return <li className="article-card">
            <h3>{articleData.title}</h3>
            <div className="article-card-top">
                <p>By: {articleData.author}</p>
                <p>On: {dateExtract(articleData.created_at)}</p>
                <p>{articleData["comment_count"]} comments</p>
            </div>
            <div className="article-card-bottom">
                <p>Votes: {articleData.votes}</p>
                <Link to={`/articles/${articleData.article_id}`}><button>Read More</button></Link>
            </div>
        </li>
    
     
}

export default ArticleCard;