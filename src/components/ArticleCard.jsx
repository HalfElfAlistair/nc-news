import { Link } from 'react-router-dom';
import {dateExtract} from "../utils/helpers";

const ArticleCard = ({ articleData }) => {
 
    return <li className="article-card">
            <h3>{articleData.title}</h3>
            <div className="article-card-top">
                <div className="by-on-area">
                    <p>By: {articleData.author}</p>
                    <p>On: {dateExtract(articleData.created_at)}</p>
                </div>
                    <p className="article-id">#{articleData.article_id}</p>
            </div>
            <div className="article-card-bottom">
                <p>Votes: {articleData.votes}</p>
                <Link to={`/articles/${articleData.article_id}`}><button>Read More</button></Link>
            </div>
        </li>
    
     
}

export default ArticleCard;