
export default function Card({ hero, handleDelete }) {
    return (
        <div
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
        >
            <img src={hero.coverUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            </div>
            <h3 className="mt-3 text-xxl font-semibold leading-10 text-white">
                <span className="absolute inset-0" />
                {hero.name}
            </h3>
            <div className="text-white">
                <span className="absolute inset-0 " />Single: {hero.single}
            </div>
            <div className="text-white leading-10">
                <span className="absolute inset-0" />Rating: {hero.rating}
            </div>
            <button onClick={() => handleDelete(hero.id)} className='close'>
          
        </button>
        </div>
    )
}
