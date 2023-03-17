import Card from "./Card"
function ListCard({ heroes, handleDelete }) {
    return (
        <div className="mx-24 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Top 10</h2>
            <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {heroes.map((hero, index) => (
                    <Card key={index} hero={hero} handleDelete={handleDelete} />
                ))}
            </div>
        </div >
    )
}

export default ListCard