import './hero.css'
import { CiPause1 } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {
  return (
    <div className='hero'>
       <div className="hero-text">
          <p>{heroData.text1}</p>
          <p>{heroData.text2}</p>
       </div>
       <div className="hero-explore">
        <p>Explore the features</p>
        <div className='secret'>
             <FaArrowRight color='white'/>
        </div>
       </div>
       <div className="hero-dot-play">
         <ul className="hero-dots">
            <li onClick={()=> setHeroCount(0)} className={heroCount === 0 ? 'hero-dot orange' : 'hero-dot'}></li>
            <li onClick={()=> setHeroCount(1)} className={heroCount === 1 ? 'hero-dot orange' : 'hero-dot'}></li>
            <li onClick={()=> setHeroCount(2)} className={heroCount === 2 ? 'hero-dot orange' : 'hero-dot'}></li>
         </ul>
         <div className="hero-play">
            {
                playStatus? <CiPause1 onClick={()=> setPlayStatus(!playStatus)}/> : <CiPlay1 onClick={()=> setPlayStatus(!playStatus)}/>
            }
            <p>See the video</p>
         </div>
       </div>
    </div>
  )
}

export default Hero
