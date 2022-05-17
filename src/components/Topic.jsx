import { useEffect } from "react";
import Articles from './Articles';
import { capitalise, topicDescription } from '../utils/helpers';

const Topic = ({topicsList, queryState, setQuerystate, topicSlug}) => {

    useEffect(()=>{
        setQuerystate("?topic=" + topicSlug)
    },[topicSlug, setQuerystate])

    return <section>
        <div>
            <div className="page-intro">
                <h2>{capitalise(topicSlug)}</h2>
                <p>{topicDescription(topicsList, topicSlug).description}</p>
            </div>
            <Articles queryState={queryState} topicSlug={topicSlug} />
        </div>
    </section>;
}

export default Topic;