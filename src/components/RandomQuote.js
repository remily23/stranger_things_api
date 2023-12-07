const RandomQuote = ({ randomQuote }) => {

    const generateRandomQuote = () => {
        return (
            <section>
                <div>
                    <p>Your Random Quote:</p>
                </div>
                <div>
                    <p>{randomQuote.author} once said...</p>
                </div>
                <div>
                    <p>"{randomQuote.quote}"</p>
                </div>
            </section>)
    }

    return (
        Object.keys(randomQuote).length ? generateRandomQuote() : <p>Loading quotes</p>

    );
}

export default RandomQuote;