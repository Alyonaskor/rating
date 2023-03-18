
function SelectRaiting({handleClick}) {

  return (
    <div>
      <p className="text-indigo-400">How do you rait this single?</p>
        <div className="flex justify-around ">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={`${i + 1}`}>
              <button
                type="radio"
                value={`${i + 1}`}
                onClick={handleClick}
                className="text-center ml-1 h-6 w-6 border-gray-300 text-gray-600 focus:bg-indigo-600 focus:text-white" >
                <div className="text-sm font-medium" >
                  {i + 1}
                </div>
              </button>
            </div>
          ))}
        </div>
    </div>
  )
}
export default SelectRaiting