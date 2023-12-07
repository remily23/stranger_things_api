import {Link, Outlet, useNavigate} from "react-router-dom";

const Home = ({fetchQuotes, clearQuote}) => {

    const navigate = useNavigate();

    const handleFetchButton = ()=>{
        clearQuote();
        fetchQuotes();
        navigate("/random-quote");

    };

    return ( 
        <>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="/history">History</Link></li>
                </ul>
            </nav>
            <Outlet />
            <button onClick={handleFetchButton}>Generate A Random Quote</button>
        </>
     );
}
 
export default Home;