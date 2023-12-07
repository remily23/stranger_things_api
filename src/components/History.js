import GeneratedQuotes from "./GeneratedQuotes";

const History = ({ listOfQuotes }) => {

    const handleGeneratedQuotes = listOfQuotes.map((generatedQuotes, index)=>{
        return <li key={index}><GeneratedQuotes generatedQuotes={generatedQuotes}/></li>
    });

    return (
        <section>
            <div>
                <p>Quotes You've Generated So Far Today</p>
            </div>
            <div>
                <ul>
                    {listOfQuotes.length ? handleGeneratedQuotes : <p>You haven't generated any quotes today</p>}
                </ul>
            </div>

        </section>
    );
}

export default History;