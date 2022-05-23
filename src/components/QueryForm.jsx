import { useState } from "react";
import { Link } from 'react-router-dom';
import { routeSelect } from '../utils/helpers';


const QueryForm = ({topicsList, setTopicSlug, setQueryState}) => {

    const [routeState, setRouteState] = useState("");
    const [topicSelect, setTopicSelect] = useState("");

    const queryChange = (queryKey, queryValue) => {
        setQueryState((currQuery) => {
            let newQuery = {...currQuery}
            newQuery[queryKey] = (queryValue) ? queryValue : "";
            return newQuery
        })
    }


   return (
    <form id="query-form">
        <div id="topic-query">
            <label>View by topic</label>
            <div id="topic-query-inputs">
                <select aria-expanded="false" onChange={(event) => {
                    setTopicSelect(event.target.value);
                    setRouteState(routeSelect(event.target.value));
                }}>
                    <option value="">All Articles</option>
                    {topicsList.map(topic => {
                        return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
                    })}
                </select>
                <button>
                    <Link to={routeState} onClick={(e) => {
                        setTopicSlug(topicSelect);
                        queryChange("topic", topicSelect)
                    }}>Go</Link>
                </button>
            </div>
        </div>
        <div id="sort-query">
            <label>Sort by</label>
            <select onChange={(event) => {
                queryChange("sortAndOrderBy", event.target.value)
            }}>
                    <option value="?sort_by=created_at&order=desc">Date Created: New-Old</option>
                    <option value="?sort_by=created_at&order=asc">Date Created: Old-New</option>
                    <option value="?sort_by=article_id&order=desc">Article Id: High-Low</option>
                    <option value="?sort_by=article_id&order=asc">Article Id: Low-High</option>
                    <option value="?sort_by=votes&order=desc">Votes: Most-Least</option>
                    <option value="?sort_by=votes&order=asc">Votes: Least-Most</option>
                </select>
        </div>
    </form>
   ) 
}

export default QueryForm;
