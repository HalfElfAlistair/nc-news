import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: "https://powerful-hollows-04803.herokuapp.com/api"
});

export const getArticles = (query) => {
    // console.log("query topic===>", query.topic)
    // console.log("query sort_by===>", query["sort_by"])
    // console.log("query order===>", query.order)
    // console.log("query topic===>", query.topic === true ? "true" : "false")
    // console.log("query topic===>", query.topic)
    // console.log("query topic===>", query.topic.length > 0 ? "true" : "false")
    // console.log("query string===>", `/articles?topic=${query.topic}?sort_by=${query["sort_by"]}&order=${query.order}`)
    // console.log("query string2===>", `/articles?sort_by=${query["sort_by"]}&order=${query.order}`)
    return ncNewsApi.get(
        (query.topic)
        ? `/articles?topic=${query.topic}`
        : `/articles?sort_by=${query["sort_by"]}&order=${query.order}`
        // (query.topic) 
        // ? `/articles?topic=${query.topic}?sort_by=${query["sort_by"]}&order=${query.order}` 
        // : `/articles?sort_by=${query["sort_by"]}&order=${query.order}`
        )
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

export const getComments = (id) => {
    return ncNewsApi.get(`/articles/${id}/comments`)
        .then(({ data }) => {
            return data.comments;
        })      
}

export const getArticleById = (id) => {
    return ncNewsApi.get(`/articles/${id}`)
        .then(({ data }) => {
            return data.article;
        })      
}

export const patchArticleById = (id, votesObj) => {
    return ncNewsApi.patch(`/articles/${id}`, votesObj)
        .then(({ data }) => {
            return data;
        })      
}

export const postComment = (id, obj) => {
    return ncNewsApi.post(`/articles/${id}/comments`, obj)
        .then(({ data }) => {
            console.log("data===>", data)
            return data;
        })
        // .catch((err) => {
        //     console.log("err===>", err)
        // })      
}