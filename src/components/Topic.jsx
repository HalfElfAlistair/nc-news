import { useEffect } from "react";
import Articles from './Articles';
import { capitalise, topicDescription } from '../utils/helpers';

const Topic = ({topicSlug, topicsList, queryState, setQuerystate}) => {

    useEffect(()=>{
        setQuerystate("?topic=" + topicSlug)
    },[topicSlug, setQuerystate])

    return <section>
        <div>
            <div id="topic-box">
                <h2>{capitalise(topicSlug)}</h2>
                <p>{topicDescription(topicsList, topicSlug)}</p>
            </div>
            <Articles queryState={queryState} />
        </div>
    </section>;
}

export default Topic;