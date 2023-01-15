import Search from "../search/Search";

const Navbar = ({inputVal, setInputVal}) => {

    return (
        <div className="navbar">
            <Search inputVal={inputVal} setInputVal={setInputVal}/>
        </div>
    );
}

export default Navbar;