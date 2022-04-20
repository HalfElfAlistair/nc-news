import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: "https://powerful-hollows-04803.herokuapp.com/api"
});

export const getArticles = () => {
    return ncNewsApi.get("/articles")
        .then(({ data }) => {
            return data.articles;
            // console.log(data.articles)
        })

            
}