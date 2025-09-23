import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';


const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance, purchasedPlayer, setPurchasedPlayer }) => {
    const playersData = use(playersPromise)

    return (
        <div className="max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {
                playersData.map(player => <PlayerCard purchasedPlayer={purchasedPlayer} setPurchasedPlayer={setPurchasedPlayer} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
            }
        </div>
    );
};

export default AvailablePlayers;