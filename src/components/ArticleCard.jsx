const ArticleCard = ({ articleData }) => {

    const dateExtract = (timeStamp) => {
        let date = timeStamp.slice(0, 10);
        return date.split("-").reverse().join("-");
    }

    return <li className="article-card">
        <h2>{articleData.title}</h2>
        <p>By: {articleData.author}</p>
        <p>On: {dateExtract(articleData.created_at)}</p>
        <p>Votes: {articleData.votes}</p>
        
    </li>
}

export default ArticleCard;