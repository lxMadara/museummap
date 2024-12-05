
function SearchBar({
    onChange,
    page,

}) {
    return (
        <div >
            <input
                type="text"
                className="search-input"
                onChange={(e) => onChange(e.target.value, page)}
                placeholder="recheche ton ouvres"
            />
        </div>
    );
}

export default SearchBar;