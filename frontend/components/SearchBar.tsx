export default function SearchBar() {
    return(
        <div>
            <input type="text" placeholder=" Search MyKad, Passport, PTPTN..." className="w-full max-w-xl rounded-full border border-gray-300 px-6 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <button className="ml-1 rounded-full bg-purple-500 px-6 py-4 text-white hover:bg-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-500">Search</button>
        </div>
    );
}