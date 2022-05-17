import { Link } from 'react-router-dom';
import {dateExtract} from "../utils/helpers";

const ArticleCard = ({ articleData }) => {
 
    return <li className="article-card">
            <h3>{articleData.title}</h3>
            <p>By: {articleData.author}</p>
            <p>On: {dateExtract(articleData.created_at)}</p>
            <div id="article-card-bottom">
                <p>Votes: {articleData.votes}</p>
                <Link to={`/articles/${articleData.article_id}`}><button>Read More</button></Link>
            </div>
        </li>
    
     
}

export default ArticleCard;