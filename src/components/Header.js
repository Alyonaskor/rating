import React, { useState, useEffect } from 'react';


function Header({ heroesList, setHeroeslist }) {
    const [isActive, setIsActive] = useState(false);
    const [seconds, setSeconds] = useState(0);

    function toggle() {
        setIsActive(!isActive);
    }

    useEffect(() => {
        let interval = null;
        const newList = [...heroesList];
        const randomElement = newList[Math.floor(Math.random() * newList.length)];
        const randomRating = Math.floor(Math.floor(Math.random() * 10) + 1);
        randomElement.rating !== randomRating && (randomElement.rating = randomRating)
        newList.sort((a, b) => b.rating - a.rating)

        if (isActive) {
            interval = setInterval(() => {
                setHeroeslist(newList)
                setSeconds(seconds => seconds + 1);
            }, (Math.random() * 1000));
        } else if (!isActive) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div>
            <div className="h-[144.01px] flex justify-between border shadow-md">
                <div className="relative w-[263px] h-[96.78px] ml-[167px] mt-[18px] ">
                    <img src="/images/Component1.png" alt="logo" ></img>
                    <div className="absolute bottom-0 left-0  bg-white h-[96.78px] w-2/5 ">
                    <div className="absolute bottom-0 left-0  animate-[spin_4s_cubic-bezier(0,0,0.2,1)_infinite]">
                        <img src="/images/Group14.png" alt="logo"></img>
                    </div>
                </div>
                </div>
                <div className="flex justify-between">
                    <div className='mr-2.5'>
                        <img className=" mt-[49px] h-[44px]" src="/images/Ellipse1.png" alt="avatar"></img>
                    </div>
                    <p className="mr-[178px] mt-[60px] text-[#FF6100] font-raleway text-base ">
                        Created by John Smith
                    </p>
                </div>
            </div>

            <div className="flex h-[50px] bg-[#FF6100] items-center">
                <button
                    onClick={toggle}
                    className="flex items-center ml-[1016px] w-[200px] h-[33px] pr-[15px] mr-[150px] border border-[#FFFFFF] bg-[#FF711A] text-[#FFFFFF] justify-between font-raleway text-base cursor-pointer hover:scale-105 ease-in-out duration-300 ">
                    <p className=" w-[18px] ml-[20px]  mt-[8px] mb-[7px] font-raleway text-base">
                        <img src="/images/Group14.png" alt="logo"></img>
                    </p>
                    {isActive ? 'Stop Ratin' : 'Random Ratin'}
                </button>
            </div>
        </div>
    )
}

export default Header