import { Link, useLocation } from 'react-router-dom';
import { capitalise, topicCheck } from '../utils/helpers';

const Breadcrumbs = ({setTopicSlug, topicSlug, topicsList, error}) => {
        
    const topicsArray = topicsList.map(topicObj => topicObj.slug)

    const location = useLocation();
    const crumbs = location.pathname.split("/").slice(1);

    return error 
    ? 
    <nav id="breadcrumbs">
        <p><Link to="/" onClick={(e) => setTopicSlug("")}>Home &gt;</Link></p>
    </nav>
    : 
    (
        <nav id="breadcrumbs">
            <p><Link to="/" onClick={(e) => setTopicSlug("")}>Home</Link></p>
            {crumbs.map((crumb, index) => {
                if (crumb !== "articles") {
                    return index === crumbs.length-1 
                    ? <p key={crumb}> &gt; {capitalise(crumb)}</p> 
                    : 
                    <p key={crumb}> &gt; <Link to={"/" + crumb}>{capitalise(crumb)}</Link></p>
                } else {
                    return topicCheck(topicSlug, topicsArray)
                }
            })}
        </nav>
    )
}

export default Breadcrumbs;