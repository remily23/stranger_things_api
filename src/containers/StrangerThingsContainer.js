import { useState} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RandomQuote from "../components/RandomQuote";
import History from "../components/History";
import Home from "../components/Home";

const StrangerThingsContainer = () => {

  const [listOfQuotes, setListOfQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState({});

  const fetchQuotes = async () => {
    const response = await fetch("https://strangerthings-quotes.vercel.app/api/quotes");
    const data = await response.json();
    
    setRandomQuote(data[0]);
    setListOfQuotes([...listOfQuotes, data[0]]);
  };

  const clearQuote = ()=>{
    setRandomQuote({});
  };

  const strangerThingsRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Home fetchQuotes={fetchQuotes} clearQuote={clearQuote}/>,
      children: [
        {
          path: "/random-quote",
          element: <RandomQuote randomQuote={randomQuote} />,
        },
        {
          path: "/history",
          element: <History listOfQuotes={listOfQuotes} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={strangerThingsRoutes} />
    </>
  );
};

export default StrangerThingsContainer;