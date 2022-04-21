import { useEffect } from "react";
import QueryForm from "./QueryForm";
import Articles from './Articles';

const Home = ({topicsList, setTopicSlug, queryState, setQuerystate}) => {

    useEffect(()=>{
        setQuerystate("")
    },[setQuerystate])

    return <section>
        <QueryForm topicsList={topicsList} setTopicSlug={setTopicSlug} setQuerystate={setQuerystate} />
        <Articles queryState={queryState} />
    </section>
}

export default Home;