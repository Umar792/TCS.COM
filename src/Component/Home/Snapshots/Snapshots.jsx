import React, { useEffect, useState } from 'react'
import "./Snapshots.css"
import Slider from "react-slick";


const Snapshots = () => {
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
      });
    const media = [
        {
            id:1,
            image : "https://cdn.storifyme.com/accounts/tcs/assets/120x/f-helping-action-portrait-78631676547091443.png?t=1677048627000",
            caption : "Helping Action, action is promise"

        },
        {
            id:2,
            image : "https://cdn.storifyme.com/accounts/tcs/assets/120x/f-virtual-worlds-portrait-53891676546855467.png?t=1677048603000",
            caption : "Virtual world real privicy"

        },
        {
            id:3,
            image : "https://cdn.storifyme.com/accounts/tcs/assets/120x/f-shot-in-the-arm-portrait-107961676546689366.png?t=1677048583000",
            caption : "Virtual world real privicy"

        },
        {
            id:4,
            image : "https://cdn.storifyme.com/accounts/tcs/assets/120x/f-new-networking-portrait-68421676546524281.png?t=1677048564000",
            caption : "new Networking"

        },
        {
            id:5,
            image : "https://cdn.storifyme.com/accounts/tcs/assets/120x/f-matchmaker-portrait-87451676546367996.png?t=1677048541000",
            caption : "new Networking"

        },
        {
            id:6,
            image : "https://cdn.storifyme.com/accounts/tcs/assets/120x/f-oil-portrait-85561676545677236.png?t=1677048519000",
            caption : "new Networking"

        },
        {
            id:7,
            image : "https://cdn.storifyme.com/accounts/tcs/assets/120x/f-oil-portrait-85561676545677236.png?t=1677048519000",
            caption : "new Networking"

        },
    ]
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 350) {
            setSettings({
              ...settings,
              slidesToShow: 2,
              slidesToScroll: 1
            });

          }else if (window.innerWidth <= 470) {
            setSettings({
              ...settings,
              slidesToShow: 2,
              slidesToScroll: 1
            });
          } 
          else if (window.innerWidth <= 768) {
            setSettings({
              ...settings,
              slidesToShow: 3,
              slidesToScroll: 2
            });
          } 
          else if (window.innerWidth <= 992) {
            setSettings({
              ...settings,
              slidesToShow: 4,
              slidesToScroll: 1
            });
          } else {
            setSettings({
              ...settings,
              slidesToShow: 6,
              slidesToScroll: 1
            });
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [settings]);
    
  return (
    <div className='Snapshots'>
        <h1>Snapshots</h1>
        <Slider  {...settings}>
            {
                media.map((item)=>{
                    return(
                        <div className='snap_flex'>
                        <div key={item.id} className='carosal_cild'>
                            <img src={item.image} alt=''/>
                        </div>
                            <p>{item.caption}</p>
                        </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}

export default Snapshots
