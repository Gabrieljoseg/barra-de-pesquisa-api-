const SearchResults = ({data}) => {

    if(!data || !data.length) return null;

    const resultList = data.map(({_id, title})=>{
        return( <li key={_id}>
            <span>{title}</span>
            </li>)
    });

    return (
        <div className="search-results">
            <ul> {resultList}</ul>
        </div>
    );
};
export default SearchResults;