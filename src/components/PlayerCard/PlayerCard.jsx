import React, { useState } from 'react';
import userImg from '../../assets/user.png'
import flagImg from '../../assets/flag.png'

const PlayerCard = ({player, setAvailableBalance, availableBalance, purchasedPlayer, setPurchasedPlayer}) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleSelected = (playerData) => {
        const playerPrice = parseInt(playerData.price.split("USD").join("").split(",").join(""))
        if(availableBalance < playerPrice){
            alert("Not Enough Coins !!!");
            return;
        }
        setIsSelected(true);
        setAvailableBalance(availableBalance - playerPrice)
        setPurchasedPlayer([...purchasedPlayer, player])
    }
    return (
        <div className="card bg-base-100 w-full shadow-md p-5">
            <figure class="overflow-hidden rounded-lg shadow-lg relative group">
                <img src={player.player_image} alt="" className='w-full md:h-[300px] object-cover transform group-hover:scale-105 transition duration-300' />
            </figure>
            <div className="">
                <div className='flex items-center gap-3 my-4'>
                    <img src={userImg} alt="" className='w-[20px] h-[20px]' />
                    <h2 className="text-base md:text-md lg:text-xl font-bold">{player.player_name}</h2>
                </div>
                <div className='flex justify-between items-center border-b-2 border-b-gray-300 pb-6'>
                    <div className='flex items-center gap-2'>
                        <img src={flagImg} alt="" />
                        <p className='text-base md:text-md lg:text-lg text-gray-500'>{player.player_country}</p>
                    </div>
                    <p className='bg-gray-200 rounded-md py-1 px-4'>{player.player_role}</p>
                </div>
                <div className='space-y-4 mt-4'>
                    <h3 className='text-base md:text-md lg:text-lg font-bold'>Rating</h3>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-base md:text-md lg:text-lg font-semibold'>{player.batting_style}</h3>
                        <p className='text-gray-500'>{player.bowling_style}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-base md:text-md lg:text-lg font-semibold'>Price: <span>{player.price}</span></p>
                        <button disabled={isSelected} onClick={() => handleSelected(player)}
                             className="btn btn-primary">{isSelected ? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;