import RatingStars from "./RatingStars";


export default function Card({index, hero, updateRating }) {

    return (
        <div className=" flex justify-between bg-[#FFFFFF] md:h-[150px]  mx-1 md:mx-0 mb-3 md:mb-[18px]">
            <div className="flex">
                <div className="mr-2 md:mr-[52px] md:w-[266px]  ">
                    <img 
                    className=" md:h-[150px] "
                    src={hero.coverUrl} 
                    alt={hero.name}></img>
                </div>
                <div className="h-10 md:h-[116px] mt-2 md:mt-[19px] md:mb-[15px] ">
                    <p style={{ color: hero.color }} className="text-start font-raleway text-sm md:font-raleway-xl md:text-xl"> {hero.name}</p>
                    <p className="text-start font-raleway text-xs md:text-base my-2 md:my-3"> {hero.single}</p>
                    <RatingStars   index={index} updateRating={updateRating} hero={hero} />
                </div> 
            </div>
            <div style={{ backgroundColor: hero.color }} className="w-[9px]"></div>
        </div>
    )
}
