const ErrorPage = ({message}) => {

    if (!message) {
        return (
            <div className="page-intro">
                <h2>Sorry, there has been an error</h2>
                <p>The following message was received: <strong><em>path not found</em></strong></p>
                <p>Please try again</p>
            </div>
        )
    } else if (message.err.response) {
        return (
            <div className="page-intro">
                <h2>Sorry, there has been an error</h2>
                <p>The following message was received: <strong><em>{message.err.response.data.msg}</em></strong></p>
                <p>Please try again</p>
            </div>
        )
    } else {
        return (
            <div className="page-intro">
                <h2>Sorry, there is an issue with the server</h2>
                <p>Please try again later</p>
            </div>
        )
    }
}

export default ErrorPage;