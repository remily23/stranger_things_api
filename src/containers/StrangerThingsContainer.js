import {useState, useEffect} from "react";
import LandingPage from "../components/LandingPage";
import RandomQuotes from "../components/RandomQuotes";
import History from "../components/History";
import Home from "../components/Home";

const StrangerThingsContainer = () => {

    const [listOfQuotes, setListOfQuotes] = useState([]);
    const [randomQuotes, setRandomQuotes] = useState(null);

    const fetchQuotes = async ()=>{
        const response = await fetch("https://strangerthings-quotes.vercel.app/api/quotes");
        const data = await response.json();
        setRandomQuotes(data[0]);
    };

    return (
        <>
            <Home/>
            <LandingPage/>
            <RandomQuotes fetchQuotes={fetchQuotes}/>
            <History/>
        </>
     );
}
 
export default StrangerThingsContainer;