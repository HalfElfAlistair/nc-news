import { Link, useLocation } from 'react-router-dom';
import { capitalise, topicCheck } from '../utils/helpers';

const Breadcrumbs = ({setTopicSlug, topicSlug, topicsList}) => {
        
    const topicsArray = topicsList.map(topicObj => topicObj.slug)

    const location = useLocation();
    const crumbs = location.pathname.split("/").slice(1);

    return <nav id="breadcrumbs">
        <p><Link to="/" onClick={(e) => setTopicSlug("")}>Home</Link></p>
        {crumbs.map((crumb) => {
            if (crumb !== "articles") {
                return <p key={crumb}> &gt; <Link to={"/" + crumb}>{capitalise(crumb)}</Link></p>
            } else {
                return topicCheck(topicSlug, topicsArray)
            }
        })}
    </nav>;
}

export default Breadcrumbs;