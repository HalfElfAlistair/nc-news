import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from "react";
import { getTopics } from "./utils/api";
import{ getLocation } from "./utils/helpers"
import Breadcrumbs from './components/Breadcrumbs';
import Header from "./components/Header";
import Home from './components/Home';
import Topic from "./components/Topic";
import ArticlePage from "./components/ArticlePage";
import ErrorPage from "./components/ErrorPage";

function App() {

  const location = useLocation();

  const [topicSlug, setTopicSlug] = useState(getLocation(location));

  const [topicsList, setTopicsList] = useState([]);

  // const [queryState, setQueryState] = useState("");
  // const [queryState, setQueryState] = useState("?sort_by=created_at&order=asc");
  const [queryState, setQueryState] = useState({topic: "", "sort_by": "created_at", order: "desc"});

  // {topic: "", "sort_by": "created_at", order: "desc"}

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
      getTopics()
          .then((topicsFromApi) => {
              setTopicsList(topicsFromApi);
              setIsLoading(false)
          })
          .catch((err) => {
            setError({ err });
          });
  }, [])

  if (error) {
    return (
      <div>
        <Breadcrumbs topicSlug={topicSlug} topicsList={topicsList}/>
        <ErrorPage message={error} />
      </div>
    ) 
  }

  if (isLoading) {
    return <div className="loading">
              <p>Getting some data for you...</p>
          </div>
  } else {
    return <div>
        <Breadcrumbs topicSlug={topicSlug} topicsList={topicsList}/>
        <Header/>
        <Routes>
          <Route path={"/"} element={<Home 
          topicsList={topicsList} 
          setTopicSlug={setTopicSlug} 
          // queryState={queryState} setQuerystate={setQuerystate} 
          queryState={queryState} setQueryState={setQueryState}
          setError={setError}
          />} />
          {/* <Route path={`/${topicSlug}`} element={<Topic topicsList={topicsList} queryState={queryState} setQuerystate={setQuerystate} topicSlug={topicSlug} />} /> */}
          <Route path={`/${topicSlug}`} element={<Topic topicsList={topicsList} queryState={queryState} setQueryState={setQueryState} topicSlug={topicSlug} />} />
          <Route path={`/articles/:id`} element={<ArticlePage setError={setError} />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
    </div>
  }


}

export default App;
