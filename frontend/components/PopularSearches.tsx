export default function PopularSearches() {
    const popularSearches = [
        "Passport Renewal",
        "Driver's License Application",
        "Business Registration",
        "Marriage Certificate",
        "Property Tax Payment"
    ];

    return (
        <div>
            <h2>Popular Searches</h2>
            <ul>
                {popularSearches.map((search, index) => (
                    <li key={index}>
                        <a href="#" className="text-purple-500 hover:underline">
                            {search}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}