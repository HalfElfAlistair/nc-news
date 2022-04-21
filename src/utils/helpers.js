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

export const topicDescription = (topics, currSlug) => {
    const currTopic = topics.filter(topic => topic.slug === currSlug);
    return currTopic[0].description;
}