function SelectRaiting({handleClick}) {

  return (
    <div>
      <p className="text-indigo-300">How do you rait this single?</p>
        <div className="flex justify-around ">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={`${i + 1}`}>
              <button
                value={`${i + 1}`}
                onClick={handleClick}
                className="text-center ml-1 h-6 w-6 border-gray-300 text-gray-600 " >
                <div className="text-sm font-medium border rounded-full w-6 h-6 bg-white" >
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