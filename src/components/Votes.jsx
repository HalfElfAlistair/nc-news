import { useState } from "react";
import { FaUndoAlt } from "react-icons/fa";
import { BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";
import { patchArticleById } from "../utils/api"

const Votes = ({article, setError}) => {

    const [voteCount, setVoteCount] = useState(article.votes);

    const [resetValue, setResetValue] = useState(0);

    const [disable, setDisable] = useState(false);

    const updateVote = (votes, num) => {
        return votes += num;
    }

    const handleVote = (incNum) => {
        patchArticleById(article.article_id, {"inc_votes": incNum})
            .catch((err) => {
                setError({ err });
            })
    }
    

    return <div id="votes">
        <p>{voteCount} votes</p>
        <button aria-label="thumbs up" disabled={disable} onClick={(e) => {
            setVoteCount((currVotes) => updateVote(currVotes, 1))
            setResetValue(-1)
            handleVote(1)
            setDisable(true)
            }}><BsHandThumbsUpFill/></button>
        <button aria-label="thumbs down" disabled={disable} onClick={(e) => {
            setVoteCount((currVotes) => updateVote(currVotes, -1))
            setResetValue(1)
            handleVote(-1)
            setDisable(true)
            }}><BsHandThumbsDownFill/></button>
        {disable === true
         ? 
         <button aria-label="reset" onClick={(e) => {
            setVoteCount((currVotes) => updateVote(currVotes, resetValue))
            handleVote(resetValue)
            setDisable(false)
        }}><FaUndoAlt/></button>
         : 
         <></>}
    </div>
}

export default Votes;