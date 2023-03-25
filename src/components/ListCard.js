import React, { useState, useEffect } from 'react';
import Card from './Card';


function ListCard({ heroes }) {
    const [heroesList, setHeroeslist] = useState(heroes)
    const [isActive, setIsActive] = useState(false);

    const updateRating = (name, rating) => {
        const newList = [...heroesList];

        newList.map((hero => (hero.name === name) &&
            (hero.rating = +rating)
        ))
        setHeroeslist(newList)
        console.log(newList);
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
            }, (Math.random() * 2000));
        } else if (!isActive && heroesList !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, heroesList]);

    return (
        <div>
            <div className="h-[50px] bg-[#FF6100] py-[6px]">
                <div className="flex ml-[1016px] w-[200px] h-[33px]  mr-[150px]  border border-[#FFFFFF] bg-[#FF711A] text-[#FFFFFF] justify-between">
                    <div className=" w-[18px] ml-[19px]  mt-[8px] mb-[7px]">  
                    <img src="/images/Group14.png" alt="logo"></img> 
                    </div>
                    <button 
                        onClick={toggle}
                        className="pr-[15px] text-left">
                        {isActive ? 'Stop Random Ratin' : 'Random Ratin'}
                    </button>
                </div>
            </div>

            <div className=" bg-[#2A8EB0] text-center pt-[26px]">

                <div className="w-[1080px] mx-auto">
                    {heroesList.sort((a, b) => b.rating - a.rating).map((hero, index) => (
                        <Card key={index} hero={hero} getRating={updateRating} />
                    ))}
                </div>
            </div >

        </div>
    )
}

export default ListCard