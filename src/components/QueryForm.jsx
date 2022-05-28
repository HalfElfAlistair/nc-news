import { useState } from "react";
import { Link } from 'react-router-dom';
import { routeSelect } from '../utils/helpers';
import "../assets/QueryForm.css";

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
            <label><strong>View by topic</strong></label>
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
                <button id="topicButton">
                    <Link to={routeState} onClick={(e) => {
                        setTopicSlug(topicSelect);
                        queryChange("topic", topicSelect)
                    }}>Go</Link>
                </button>
            </div>
        </div>
        <div id="sort-query">
            <label><strong>Sort by</strong></label>
            <select onChange={(event) => {
                queryChange("sortAndOrderBy", event.target.value)
            }}>
                    <option value="?sort_by=created_at&order=desc">Date Created: Newest First</option>
                    <option value="?sort_by=created_at&order=asc">Date Created: Oldest First</option>
                    <option value="?sort_by=votes&order=desc">Votes: Most First</option>
                    <option value="?sort_by=votes&order=asc">Votes: Least First</option>
                    <option value="?sort_by=comment_count&order=desc">Comments: Most First</option>
                    <option value="?sort_by=comment_count&order=asc">Comments: Least First</option>
                </select>
        </div>
    </form>
   ) 
}

export default QueryForm;
