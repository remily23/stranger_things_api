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
                <h1>Stranger Things Quotes</h1>
                <p><Link to="/">Home</Link></p>
                <p><Link to="/history">History</Link></p>
            </nav>
            <Outlet />
            <button onClick={handleFetchButton}>Generate A Random Quote</button>
        </>
     );
}
 
export default Home;