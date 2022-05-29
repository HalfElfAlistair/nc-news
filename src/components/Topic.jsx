import { useEffect } from "react";
import Articles from './Articles';
import { capitalise, topicFilter } from '../utils/helpers';

const Topic = ({topicsList, queryState, topicSlug, setQueryState, setError}) => {

    useEffect(()=>{
        setQueryState((currQuery) => {
            let newQuery = {...currQuery}
            newQuery.topic = topicSlug;
            return newQuery;
        })
    },[topicSlug, setQueryState])

    const topicDescription = topicFilter(topicsList, topicSlug).description;

    useEffect(() => {
        if (!topicDescription) {
            const error = {err: {response: {status: 404, data: {msg: "Path not found"}}}}
            setError(error)
        } 
    }, [setError, topicDescription])


    return (
        <section>
            <div>
                <div className="page-intro">
                    <h2>{capitalise(topicSlug)}</h2>
                    <p>{topicDescription}</p>
                </div>
                <Articles queryState={queryState} topicSlug={topicSlug} />
            </div>
        </section>
    ) 
    

    
}

export default Topic;