import {useState, useEffect} from "react";
import LandingPage from "../components/LandingPage";
import RandomQuotes from "../components/RandomQuotes";
import History from "../components/History";
import Home from "../components/Home";

const StrangerThingsContainer = () => {
    return (
        <>
            <Home/>
            <LandingPage/>
            <RandomQuotes/>
            <History/>
        </>
     );
}
 
export default StrangerThingsContainer;