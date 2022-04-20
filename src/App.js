import { Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import QueryForm from "./components/QueryForm";
import Articles from './components/Articles';

function App() {
  return <div>
        <p id="breadcrumbs">Breadcrumbs...</p>
        <Header/>
        <QueryForm/>
        <Articles/>
        <Routes></Routes>
    </div>
}

export default App;
