import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: "https://powerful-hollows-04803.herokuapp.com/api"
});

export const getArticles = (query) => {
    return ncNewsApi.get(
        (query.topic)
        ? `/articles?topic=${query.topic}`
        : `/articles${query.sortAndOrderBy}`
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
            return data;
        })    
}

export const deleteComment = (id) => {
    return ncNewsApi.delete(`/comments/${id}`)
}