const Search = ({inputVal, setInputVal}) => {

    const onSearch = (e) => {
        setInputVal(e.target.value);
    }

    return (
        <div className="search">
            <input value={inputVal} onChange={e => onSearch(e)}/>
        </div>
    )
}

export default Search;