import { useEffect } from "react";
import QueryForm from "./QueryForm";
import Articles from './Articles';

const Home = ({topicsList, setTopicSlug, queryState, setError, setQueryState}) => {

    useEffect(()=>{
        setQueryState("")
    },[setQueryState])

    return <section>
        <div className="page-intro">
                <h2>Home</h2>
                <p>View a list of all our articles, or use the form below to view articles by topic or change the order in which they are sorted by.</p>
            </div>
        <QueryForm topicsList={topicsList} setTopicSlug={setTopicSlug} setQueryState={setQueryState} />
        <Articles queryState={queryState} setError={setError} />
    </section>
}

export default Home;