import React, { useState, useEffect } from 'react';
import Card from './Card';



function ListCard({ heroes }) {
    const [heroesList, setHeroeslist] = useState(heroes.sort((a, b) => b.rating - a.rating))
    const [isActive, setIsActive] = useState(false);
    const [seconds, setSeconds] = useState(0);

    const updateRating = (e, index) => {
        const newList = [...heroesList]
        newList[index].rating !== e.currentTarget.value &&
            (newList[index].rating = +e.currentTarget.value)
        newList.sort((a, b) => b.rating - a.rating)
        setHeroeslist(newList)
    }

    function toggle() {
        setIsActive(!isActive);
    }

    useEffect(() => {
        let interval = null;
        const newList = [...heroesList];
        const randomElement = newList[Math.floor(Math.random() * newList.length)];
        const randomRating = Math.floor(Math.floor(Math.random() * 10) + 1);
        randomElement.rating = randomRating
        newList.sort((a, b) => b.rating - a.rating)

        if (isActive) {
            interval = setInterval(() => {
                setHeroeslist(newList)
                setSeconds(seconds => seconds + 1);
            }, (Math.random() * 5000));
        } else if (!isActive) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className="sm:mx-24 mx-10 text-center">
            <button
                onClick={toggle}
                className={`mb-10 text-white bg-gradient-to-br from-purple-600 to-blue-500 
                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
                 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2`}>
                {isActive ? 'STOP RANDOM RATING' : 'RANDOM RATING'}
            </button>
            <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {heroesList.map((hero, index) => (
                    <Card key={index} index={index} hero={hero} updateRating={updateRating} />
                ))}
            </div>
        </div >
    )
}

export default ListCard