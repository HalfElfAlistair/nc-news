import { useEffect } from "react";
import QueryForm from "./QueryForm";
import Articles from './Articles';

const Home = ({topicsList, setTopicSlug, queryState, setQuerystate, setError}) => {

    useEffect(()=>{
        setQuerystate("")
    },[setQuerystate])

    return <section>
        <div className="page-intro">
                <h2>Home</h2>
                <p>View a list of all our articles, or use the form below to view articles by topic or change the order in which they are sorted by.</p>
            </div>
        <QueryForm topicsList={topicsList} setTopicSlug={setTopicSlug} setQuerystate={setQuerystate} />
        <Articles queryState={queryState} setError={setError} />
    </section>
}

export default Home;