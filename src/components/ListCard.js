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

        <div className=" mb-[521px] ">
            <Header heroesList={heroesList} setHeroeslist={setHeroeslist} />
            <div className=" bg-[#2A8EB0] border border-opacity-[.35] border-[#707070] text-center pt-[26px]  pb-[521px]">
                <div className="w-[1080px] mx-auto">
                    {heroesList.map((hero, index) => (
                        <Card key={index} index={index} hero={hero} updateRating={updateRating} />
                    ))}
                </div>
            </div >
        </div>
    )
}

export default ListCard