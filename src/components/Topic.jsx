import { useEffect } from "react";
import Articles from './Articles';
import { capitalise, topicDescription } from '../utils/helpers';

const Topic = ({topicsList, queryState, topicSlug, setQueryState}) => {

    useEffect(()=>{
        setQueryState((currQuery) => {
            let newQuery = {...currQuery}
            newQuery.topic = topicSlug;
            return newQuery;
        })
    },[topicSlug, setQueryState])

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