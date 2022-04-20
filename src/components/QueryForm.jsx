const QueryForm = () => {
   return <form>
       <div id="topic-query">
        <label>Select a topic</label>
            <select>
                <option>all articles</option>
                <option>coding</option>
                <option>football</option>
                <option>cooking</option>
            </select>
       </div>
       <div id="sort-query">
        <label>Sort articles by:</label>
        <select>
                <option>article id</option>
                <option>date created</option>
                <option>votes</option>
            </select>
            <button>Asc</button>
       </div>
    </form>
}

export default QueryForm;