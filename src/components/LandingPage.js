const LandingPage = ({fetchQuotes}) => {

    const handleFetchButton = () => {
        fetchQuotes();

    }

    return (  
        <>
            <p>This is the landing page</p>
            <button onClick={handleFetchButton}>Get quotes</button>
        </>
    );
}
 
export default LandingPage;