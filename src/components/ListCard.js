import Card from "./Card"
import { useState } from "react";

function ListCard({ heroes }) {
    const [heroesList, setHeroeslist] = useState(heroes)

    const updateRating = (name, rating) => {
        const newList = [...heroesList];
        newList.map((hero => (hero.name === name) &&
            (hero.rating = +rating)
        ))
        setHeroeslist(newList)
    }

    const updateRatingRemdomlly = () => {
        const newList = [...heroesList];
        const randomElement = newList[Math.floor(Math.random() * newList.length)];
        newList.map((hero => (hero.name === randomElement.name) &&
        (hero.rating = Math.floor(Math.floor(Math.random() * 10) + 1))
    ))
        setHeroeslist(newList)   
    }

    const setTimeOutOnClick = () => {
        setTimeout(updateRatingRemdomlly, Math.random() * 5000)
    }


    return (
        <div className="sm:mx-24 mx-10 text-center">
            <button
                onClick={setTimeOutOnClick}
                className="mb-10 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-600 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">
                RANDOM RATING
            </button>
            <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {heroesList.sort((a, b) => b.rating - a.rating).map((hero, index) => (
                    <Card key={index} hero={hero} getRating={updateRating} />
                ))}
            </div>
        </div >
    )
}

export default ListCard