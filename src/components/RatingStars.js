function RatingStars({ index, updateRating, hero }) {

    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="font-raleway text-sm">Rate me:</p>
                <div className="flex justify-center gap-1">
                    {Array.from({ length: 10 }, (_, i) => (
                        <button
                            key={i}
                            value={`${i + 1}`}
                            onClick={(e) => { updateRating(e, index) }}
                            className=" mx-[7px] text-center w-[14px] h-[14px] text-transparent ">
                            <svg
                                style={(i + 1 <= hero.rating) ? { fill: hero.color, stroke: hero.color } : { stroke: hero.color }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                className="w-[14px] h-[14px]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                            </svg>

                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default RatingStars