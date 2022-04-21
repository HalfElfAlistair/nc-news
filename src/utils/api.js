import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: "https://powerful-hollows-04803.herokuapp.com/api"
});

export const getArticles = (query) => {
    console.log("query ===>", query)
    return ncNewsApi.get((query) ? `/articles${query}` : "/articles")
        .then(({ data }) => {
            return data.articles;
        })      
}

export const getTopics = () => {
    return ncNewsApi.get("/topics")
        .then(({ data }) => {
            return data.topics;
        })      
}