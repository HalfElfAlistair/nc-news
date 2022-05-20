import { useState } from "react";
import { Link } from 'react-router-dom';
import { routeSelect } from '../utils/helpers';


const QueryForm = ({topicsList, setTopicSlug, setQuerystate, setQueryState}) => {

    const [routeState, setRouteState] = useState("");

    const [topicSelect, setTopicSelect] = useState("");

   return (
    <form id="query-form">
        <div id="topic-query">
        <label>Topics</label>
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
            setQueryState(topicSelect ? "?topic=" + topicSelect : "");
            // console.log(querystate)
        }}>Go</Link>
        </button>
        </div>
        <div id="sort-query">
        <label>Sort by</label>
        <select onChange={(event) => {

        }}>
                <option>Article Id</option>
                <option>Date Created</option>
                <option>Votes</option>
            </select>
            <button>Ascending</button>
        </div>
    </form>
   ) 
}

export default QueryForm;
