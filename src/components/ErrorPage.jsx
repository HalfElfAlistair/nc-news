// import axios from "axios";

const ErrorPage = ({message}) => {
    const messageErr = message.err;

    return (messageErr.response) ? 
        <div className="page-intro">
            <h2>Sorry, there has been an error</h2>
            <p>The following message was received: <strong><em>{messageErr.response.data.msg}</em></strong></p>
            <p>Please try again</p>
        </div>
        : 
        <div className="page-intro">
            <h2>Sorry, there is an issue with the server</h2>
            <p>Please try again later</p>
        </div>
}

export default ErrorPage;