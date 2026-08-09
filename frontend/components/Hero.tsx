import SearchBar from"./SearchBar";
import PopularSearches from "./PopularSearches";

export default function Hero() {
    return(
        <section>
            <h1>Welcome to StepMY</h1>
            <p>Simplifying Malaysian procedures through step-by-step guides, required documents, timelines, costs, and official resources.</p>
            <p>Hi there ! what do you need help with today?</p>
            <SearchBar />
            <PopularSearches />
        </section>
    )
}
