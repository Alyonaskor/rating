import RatingStars from "./RatingStars";


export default function Card({index, hero, updateRating }) {

    return (
        <div className=" flex justify-between bg-[#FFFFFF] h-[150px] mb-[18px]">
            <div className=" flex">
                <div className="mr-[52px] w-[266px]">
                    <img 
                    className=" h-[150px]"
                    src={hero.coverUrl} 
                    alt={hero.name}></img>
                </div>
                <div className="h-[116px] mt-[19px] mb-[15px] ">
                    <p style={{ color: hero.color }} className="text-start font-raleway-xl text-xl"> {hero.name}</p>
                    <p className="text-start font-raleway text-base my-3"> {hero.single}</p>
                    <RatingStars   index={index} updateRating={updateRating} color={hero.color} />
                </div> 
            </div>
            <div style={{ backgroundColor: hero.color }} className="w-[9px]"></div>
        </div>
    )
}
