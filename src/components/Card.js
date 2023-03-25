import RatingStars from "./RatingStars";
import { useState } from "react";

export default function Card({ hero, getRating }) {
    const [selected, setSelected] = useState(hero.rating)
    const heroColor = hero.color

    const handleClick = (e) => {
        if (e.currentTarget.value >= 1 && e.currentTarget.value <= 10) {
            setSelected(e.currentTarget.value)
            getRating(hero.name, e.currentTarget.value)
        }
    }

    return (
        <div className=" flex justify-between bg-[#FFFFFF] h-[150px] mb-[18px]">
            <div className=" flex">
                <div className="mr-[52px] w-[266px]">
                    <img src={hero.coverUrl} alt={hero.name}></img>

                </div>
                <div className=" bh-[116px] w-[269px]">
                    <p className="my-4 text-start"> {hero.name}</p>
                    <p className="my-2 text-start"> {hero.single}</p>
               
                    <RatingStars rating={hero.rating} handleClick={handleClick} color={hero.color} />
                    
                </div> 
            </div>
            <div style={{ backgroundColor: heroColor }} className="w-[9px]"></div>
        </div>
    )
}
