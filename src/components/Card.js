import SelectRating from "./SelectRating";


export default function Card({index, hero, updateRating }) {
    const heroColor = hero.color

    return (
        <div className="mt-4">
            {/* <span className={`-my-10 -mx-4 z-30 relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  text-white text-2xl`}> */}
            <span style={{ backgroundColor: heroColor }} className={`-my-10 -mx-4 z-30 relative flex h-14 w-14 items-center justify-center rounded-full {bg-[${hero.color}]}  text-white text-2xl`}>
                {hero.rating}
            </span>
            <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 py-8 ">
                <img src={hero.coverUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/60" />
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm  text-gray-300">
                </div>
                <h3 className="text-2xl font-semibold text-white">
                    <span className="absolute" />
                    {hero.name}
                </h3>
                <div className="text-white mb-4">
                    <span className="absolute  " />Single: {hero.single}
                </div>
                <SelectRating index={index}  updateRating={updateRating} />
            </div>
        </div>
    )
}
