import './background.css'


const Background = ({playStatus, heroCount}) => {
    
   if (playStatus) {
     return (
        <video className='background fade-in' autoPlay loop muted>
            <source src='/assets/electric car.mp4' type='video/mp4'/>
        </video>
     )
   } 
   else if ( heroCount === 0)
   {
     return <img src="/assets/lotus_eletre_june_23_oslo_carousel_06.webp" alt="" className="background fade-in" />
   }
   else if ( heroCount === 1)
   {
     return <img src="/assets/lotus_eletre_june_23_oslo_carousel_02.webp" alt="" className="background fade-in" />
   }
   else if ( heroCount === 2)
   {
     return <img src="/assets/main-banner.webp" alt="" className="background fade-in" />
   }
}

export default Background
