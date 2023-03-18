import SelectRating from "./SelectRating";
import { useState } from "react";

export default function Card({ hero }) {
    const [selected, setSelected] = useState(hero.rating)
  
    const handleClick = (e) => {
      setSelected(e.currentTarget.value)
    }

    return (
        <div className="mt-12">
            <span className="-my-6 -mx-4 z-30 relative flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white text-2xl">
                {selected}
            </span>
            <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 leading-10">
                <img src={hero.coverUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                </div>
                <h3 className="text-2xl font-semibold text-white">
                    <span className="absolute" />
                    {hero.name}
                </h3>
                <div className="text-white mb-4">
                    <span className="absolute  " />Single: {hero.single}
                </div>
                <SelectRating rating={hero.rating} handleClick={handleClick}/>
            </div>
        </div>
    )
}
