const RandomQuote = ({ randomQuote }) => {

    const generateClassName = () => {
        return randomQuote.author.toLowerCase().split(/[\s.]+/).join("-");
    }

    const generateRandomQuote = () => {
        return (
            <section className={generateClassName()}>
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