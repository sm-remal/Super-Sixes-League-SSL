import React from 'react';
import deleteIcon from '../../assets/Frame.png'

const SelectedCard = ({ playerSelect, removePlayer }) => {
    const handleRemove = () => {
        removePlayer(playerSelect);
    }
    return (
        <div className='flex justify-between items-center border-1 md:border-2 border-gray-300 rounded-lg md:rounded-2xl md:shadow-sm p-3 2xl:p-5 my-3 md:my-7 overflow-hidden hover:shadow-lg transform hover:scale-103 transition duration-300 ease-out'>
            <div className='flex gap-3 md:gap-5 items-center'>
                <img src={playerSelect.player_image} alt="" className='w-[60px] h-[60px] md:w-[80px] md:h-[90px] 2xl:w-[120px] 2xl:h-[130px] rounded-xl md:rounded-xl' />
                <div className='md:space-y-3 2xl:space-y-5'>
                    <h3 class="text-base md:text-xl 2xl:text-4xl font-bold">{playerSelect.player_name}</h3>
                    <h4 class="text-base md:text-lg 2xl:text-2xl font-medium text-gray-500">{playerSelect.player_role}</h4>
                </div>
            </div>
            <img onClick={handleRemove} src={deleteIcon} alt="" className='md:w-[45px] lg-[55px] cursor-pointer md:pr-4' />
        </div>
    );
};

export default SelectedCard;