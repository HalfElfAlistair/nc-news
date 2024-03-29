import { Link } from 'react-router-dom';

export const capitalise = (string) => {
    let capitalisedString = string.split("");
    return capitalisedString.map((letter, index) => index === 0 ? letter.toUpperCase() : letter).join("");
}

export const getLocation = (locationString) => {
    return locationString.pathname.split("/").slice(1).join("");
}

export const routeSelect = (topic) => {
    return "/" + topic;
}

export const topicFilter = (topics, currSlug) => {
    const currTopic = topics.filter(topic => topic.slug === currSlug);
    return currTopic[0] ? currTopic[0] : "";
}

export const dateExtract = (timeStamp) => {
    let date = timeStamp.slice(0, 10);
    return date.split("-").reverse().join("-");
}

export const topicCheck = (topic, arr) => {
    if (arr.includes(topic)) {
        return <p> &gt; <Link to={`/${topic}`}>{capitalise(topic)}</Link></p>
    }
}