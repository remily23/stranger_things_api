import {Link, Outlet} from "react-router-dom";

const Home = ({fetchQuotes}) => {

    const handleFetchButton = ()=>{
        fetchQuotes();

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
            <button onClick={handleFetchButton}>Click Me</button>
        </>
     );
}
 
export default Home;