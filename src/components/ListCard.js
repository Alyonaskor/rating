import Card from "./Card"
import { useState } from "react";

function ListCard({ heroes }) {
    const [ heroesList, setHeroeslist] = useState(heroes)
    

    const updateRating = (name, rating) => {
        const newList = [...heroesList];
        newList.map((hero => (hero.name === name) && 
        (hero.rating = +rating )
        ))
        setHeroeslist(newList)
      }
console.log(heroesList);
    return (
        <div className="sm:mx-24 mx-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Top 10</h2>
            <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {heroesList.sort((a, b) => b.rating - a.rating).map((hero, index) => (
                    <Card key={index} hero={hero} getRating={updateRating}/>
                ))}
            </div>
        </div >
    )
}

export default ListCard