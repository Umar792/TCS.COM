import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "./Action.css"

const Action = () => {
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      });
    const media = [
        {
            id:1,
            image : "https://s7ap1.scene7.com/is/image/TCSCOMprod/kautex-accelerates-digitalization-sustainable-mobility-card:Small?wid=575&hei=680&dpr=off",
            caption : "Helping Action, action is promise",
            paragraph : "South African insurer Momentum Metropolitan Life had a large backlog of service"

        },
        {
            id:2,
            image : "https://s7ap1.scene7.com/is/image/TCSCOMprod/colruyt-algo-pricing-1:Small?wid=575&hei=681&dpr=off",
            caption : "Virtual world real privicy",
            paragraph : "South African insurer Momentum Metropolitan Life had a large backlog of service"

        },
        {
            id:3,
            image : "https://s7ap1.scene7.com/is/image/TCSCOMprod/takeda-Card-1330x1270:Small?wid=575&hei=680&dpr=off",
            caption : "Virtual world real privicy",
            paragraph : "South African insurer Momentum Metropolitan Life had a large backlog of service"

        },
        {
            id:4,
            image : "https://s7ap1.scene7.com/is/image/TCSCOMprod/chatbot-1:Small?wid=575&hei=681&dpr=off",
            caption : "new Networking",
            paragraph : "South African insurer Momentum Metropolitan Life had a large backlog of service"

        },
        {
            id:5,
            image : "https://s7ap1.scene7.com/is/image/TCSCOMprod/nwc-erp-platform-transformation-supply-card-1:Small?wid=575&hei=680&dpr=off",
            caption : "new Networking",
            paragraph : "South African insurer Momentum Metropolitan Life had a large backlog of service"

        },
    ]
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 350) {
            setSettings({
              ...settings,
              slidesToShow: 1,
              slidesToScroll: 1
            });

          }else if (window.innerWidth <= 470) {
            setSettings({
              ...settings,
              slidesToShow: 1,
              slidesToScroll: 1
            });
          } 
          else if (window.innerWidth <= 768) {
            setSettings({
              ...settings,
              slidesToShow: 1,
              slidesToScroll: 1
            });
          } 
          else if (window.innerWidth <= 992) {
            setSettings({
              ...settings,
              slidesToShow: 2,
              slidesToScroll: 1
            });
          } else {
            setSettings({
              ...settings,
              slidesToShow: 3,
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
    <div className='action'>
    <h1>Belief in action</h1>
    <Slider  {...settings}>
        {
            media.map((item)=>{
                return(
                    <>
                    <div key={item.id} className='action_carosal_cild'>
                        <img src={item.image} alt=''/>
                        <div className='actiobn_content'>
                        <h2>{item.caption}</h2>
                        <p>{item.paragraph}</p>
                        <button>READ MORE</button>
                        </div>

                    </div>
                    </>
                )
            })
        }
    </Slider>
</div>
  )
}

export default Action
