import { useState } from "react";
import { Link } from 'react-router-dom';
import { routeSelect } from '../utils/helpers';

const QueryForm = ({topicsList, setTopicSlug, setQuerystate}) => {

    const [routeState, setRouteState] = useState("");

    const [topicSelect, setTopicSelect] = useState("");

   return <form>
       <div id="topic-query">
        <label>Select a topic</label>
        <select onChange={(event) => {
            setTopicSelect(event.target.value);
            setRouteState(routeSelect(event.target.value));
        }}>
            <option value="">all articles</option>
            {topicsList.map(topic => {
                return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
            })}
        </select>
        <button>
        <Link to={routeState} onClick={(e) => {
            setTopicSlug(topicSelect);
            setQuerystate("?topic=" + topicSelect);
        }}>Go</Link>
        </button>
       </div>
       <div id="sort-query">
        <label>Sort articles by:</label>
        <select>
                <option>article id</option>
                <option>date created</option>
                <option>votes</option>
            </select>
            <button>Asc</button>
       </div>
    </form>
}

export default QueryForm;
