import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from "react";
import { getTopics } from "./utils/api";
import{ getLocation } from "./utils/helpers"
import Breadcrumbs from './components/Breadcrumbs';
import Header from "./components/Header";
import Home from './components/Home';
import Topic from "./components/Topic";

function App() {

  const location = useLocation();
  const [topicSlug, setTopicSlug] = useState(getLocation(location));

  const [topicsList, setTopicsList] = useState([]);

  const [queryState, setQuerystate] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      getTopics()
          .then((topicsFromApi) => {
              setTopicsList(topicsFromApi);
              setIsLoading(false)
          })
  }, [])

  if (isLoading) {
    return <div className="loading">
              <p>Getting some data for you...</p>
          </div>
  } else {
    return <div>
        <Breadcrumbs />
        <Header/>
        <Routes>
          <Route path="/" element={<Home topicsList={topicsList} setTopicSlug={setTopicSlug} queryState={queryState} setQuerystate={setQuerystate} />} />
          <Route path={"/" + topicSlug} element={<Topic topicSlug={topicSlug} topicsList={topicsList} queryState={queryState} setQuerystate={setQuerystate} />} />
        </Routes>
    </div>
  }


}

export default App;
