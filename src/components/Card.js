import RatingStars from "./RatingStars";
import { useState } from "react";

export default function Card({index, hero, updateRating }) {
    const heroColor = hero.color

    return (
        <div className=" flex justify-between bg-[#FFFFFF] h-[150px] mb-[18px]">
            <div className=" flex">
                <div className="mr-[52px] w-[266px]">
                    <img src={hero.coverUrl} alt={hero.name}></img>

                </div>
                <div className=" bh-[116px] w-[269px]">
                    <p className="my-4 text-start"> {hero.name}</p>
                    <p className="my-2 text-start"> {hero.single}</p>
               
                    <RatingStars   index={index} rating={hero.rating} updateRating={updateRating} color={hero.color} />
                    
                </div> 
            </div>
            <div style={{ backgroundColor: heroColor }} className="w-[9px]"></div>
        </div>
    )
}
