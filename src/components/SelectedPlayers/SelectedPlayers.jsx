import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({ purchasedPlayer, removePlayer, addMorePlayerBtn }) => {

    return (
        <div className='max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm px-5 mt-10'>
            {
                purchasedPlayer.map(playerSelect => <SelectedCard removePlayer={removePlayer} playerSelect={playerSelect}></SelectedCard>)
            }
            <button onClick={() => addMorePlayerBtn(true)} className='btn btn-primary'>Add More Player</button>
        </div>
    );
};

export default SelectedPlayers;