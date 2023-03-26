import React, { useState } from 'react';
import Card from './Card';
import Header from './Header';



function ListCard({ heroes }) {
    const [heroesList, setHeroeslist] = useState(heroes.sort((a, b) => b.rating - a.rating))
    const updateRating = (e, index) => {
        const newList = [...heroesList]
        newList[index].rating !== e.currentTarget.value && (newList[index].rating = +e.currentTarget.value)
        newList.sort((a, b) => b.rating - a.rating)
        setHeroeslist(newList)

    }

    return (

        <div className="w-[1366px]  h-[2567]">
            <Header heroesList={heroesList} setHeroeslist={setHeroeslist} />
            <div className=" bg-[#2A8EB0] text-center pt-[26px]">
                <div className="w-[1080px] mx-auto">
                    {heroesList.map((hero, index) => (
                        <Card key={index} hero={hero} getRating={updateRating} />
                    ))}
                </div>
            </div >
        </div>
    )
}

export default ListCard