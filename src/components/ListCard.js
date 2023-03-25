import React, { useState, useEffect } from 'react';
import Card from './Card';


function ListCard({ heroes }) {
    const [heroesList, setHeroeslist] = useState(heroes)
    const [isActive, setIsActive] = useState(false);

    const updateRating = (name, rating) => {
        const newList = [...heroesList];
        newList.map((hero => (hero.name === name && hero.rating !== +rating) &&
            (hero.rating = +rating)
        ))
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
        if (isActive) {
            interval = setInterval(() => {
                setHeroeslist(newList)
            }, (Math.random() * 5000));
        } else if (!isActive && heroesList !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, heroesList]);

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
                {heroesList.sort((a, b) => b.rating - a.rating).map((hero, index) => (
                    <Card key={index} hero={hero} getRating={updateRating} />
                ))}
            </div>
        </div >
        )
    }

export default ListCard