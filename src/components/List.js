import Card from "./Card"


function ListCard({ heroes }) {
    

    return (
        <div className="sm:mx-24 mx-10 text-center">
            <button
                 id="clickMe" type="button"        
                
                className="mb-10 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">
                RANDOM RATING
            </button>
            <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {heroes.sort((a, b) => b.rating - a.rating).map((hero, index) => (
                    <Card key={index} hero={hero}  />
                ))}
            </div>
        </div >
    )
}

export default ListCard