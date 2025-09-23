import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';



const fetchPlayers = async () => {
  const res = await fetch('/players.json');
  return res.json();
}
const playersPromise = fetchPlayers();

function App() {

  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(156000000);
  const [purchasedPlayer, setPurchasedPlayer] = useState([]);

  const removePlayer = (playerDelete) => {
    const filteredPlayer = purchasedPlayer.filter(storePlayer => storePlayer.player_name !== playerDelete.player_name)
    setPurchasedPlayer(filteredPlayer);
    setAvailableBalance(availableBalance + parseInt(playerDelete.price.split("USD").join("").split(",").join("")))
  }
  const addMorePlayerBtn = (btnAvailable) => {
    setToggle(btnAvailable)
  }

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner></Banner>
      <div className='max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm px-5 flex justify-between items-center'>
        <h2 class="text-base md:text-xl lg:text-3xl 2xl:text-5xl font-bold">{
          toggle === true ? "Available Players" : `Selected Players (${purchasedPlayer.length}/6)`
        }</h2>
        <div className='flex items-center'>
          <button onClick={() => { setToggle(true); addMorePlayerBtn(true) }} className={`${toggle ? "bg-[#3106cbde]" : ""} px-4 py-2 border-1 border-r-0 ${toggle === true ? "text-white" : ""} rounded-l-xl cursor-pointer text-xs md:text-lg font-semibold`}>Available</button>
          <button onClick={() => setToggle(false)} className={`${toggle === false ? "bg-[#3106cbde]" : ""} ${toggle === false ? "text-white" : ""} px-4 py-2 border-1 border-l-0 rounded-r-xl cursor-pointer text-xs md:text-lg font-semibold`}>Selected (<span>{purchasedPlayer.length}</span>)</button>

        </div>
      </div>
      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
          <AvailablePlayers purchasedPlayer={purchasedPlayer} setPurchasedPlayer={setPurchasedPlayer} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
        </Suspense> : <SelectedPlayers addMorePlayerBtn={addMorePlayerBtn} removePlayer={removePlayer} purchasedPlayer={purchasedPlayer}></SelectedPlayers>
      }
      <ToastContainer />
      <Footer></Footer>
    </>
  )
}

export default App
