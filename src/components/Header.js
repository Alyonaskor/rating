import React, { useState, useEffect } from 'react';


function Header({ heroesList, setHeroeslist   }) {
   
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
        <div className="">
            <div className="h-[144.01px] flex justify-between">
                <div className=" w-[263px] h-[96.78px] ml-[167px] mt-[18px]">
                    <img src="/images/Component1.png" alt="logo" ></img>
                </div>
                <div className="flex justify-between">
                    <div >
                        <img className=" mt-[49px] ml-[10px]  h-[44px]" src="/images/Ellipse1.png" alt="avatar"></img>
                    </div>
                    <div className="flex justify-end border border-gray-400  mr-[178px] mt-[60px] w-[190px] h-[21px] text-[#FF6100]">
                        Created by John Smith
                    </div>
                </div>
            </div>

            <div className="flex h-[50px] bg-[#FF6100] items-center">
                <button
                    onClick={toggle}
                    className="flex  items-center ml-[1016px] w-[200px] h-[33px] pr-[15px] text-left mr-[150px]  border border-[#FFFFFF] bg-[#FF711A] text-[#FFFFFF] justify-between">
                    <div className=" w-[18px] ml-[19px]  mt-[8px] mb-[7px]">
                        <img src="/images/Group14.png" alt="logo"></img>
                    </div>
                    {isActive ? 'Stop Random Ratin' : 'Random Ratin'}
                </button>
            </div>
        </div>
    )
}

export default Header