const RandomQuote = ({randomQuote}) => {

    return ( 
        <section>
            <div>
                <p>Your Random Quote:</p>
            </div>
            <div>
                <p>{randomQuote.author} once said...</p>
            </div>
            <div>
                <p>{randomQuote.quote}</p>
            </div>
        </section>

     );
}
 
export default RandomQuote;