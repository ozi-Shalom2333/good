import { useEffect, useState } from "react"
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";


const App = () => {
  let heroData = [
     {text1:'Dive into', text2: 'what you love'},
     {text1:'Indulge', text2: 'your passions'},
     {text1:'Give in to', text2: 'your passion'},
  ]
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false)


 useEffect(() => {
  if (playStatus) return; 
  const interval = setInterval(() => {
    setHeroCount((prev) => (prev + 1) % heroData.length);
  }, 3000);

  return () => clearInterval(interval);
}, [playStatus, heroData.length]);




  return (
    <div>
      <Background playStatus = {playStatus} heroCount = {heroCount}/>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App
