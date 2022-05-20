import { useState } from "react";
import { Link } from 'react-router-dom';
import { routeSelect } from '../utils/helpers';


const QueryForm = ({topicsList, setTopicSlug, setQueryState}) => {

    const [routeState, setRouteState] = useState("");
    const [topicSelect, setTopicSelect] = useState("");
    const [orderState, setOrderState] = useState("desc");

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
            queryChange("topic", topicSelect)
        }}>Go</Link>
        </button>
        </div>
        <div id="sort-query">
        <label>Sort by</label>
        <select onChange={(event) => {
            queryChange("sort_by", event.target.value)
        }}>
                <option value="created_at">Date Created</option>
                <option value="article_id">Article Id</option>
                <option value="votes">Votes</option>
            </select>
            <button onClick={(event) => {
                event.preventDefault();
                setOrderState((currOrder) => {
                    return currOrder === "asc" ? "desc" : "asc";
                })
                queryChange("order", orderState)
            }}>{orderState === "asc" ? "Descending" : "Ascending"}</button>
        </div>
    </form>
   ) 
}

export default QueryForm;
