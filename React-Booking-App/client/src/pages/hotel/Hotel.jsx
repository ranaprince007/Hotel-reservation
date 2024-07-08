import "./hotel.css"
import React, { useState } from 'react'
import Navbar from "../../components/navbar/Navbar"

import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import a from "./img/a.jpg"
import b from "./img/b.jpg"
import c from "./img/c.jpg"
import d from "./img/d.jpg"
import e from "./img/e.jpg"
import f from "./img/f.jpg"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

export default function Hotel() {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: a,
    },
    {
      src: b,
    },
    {
      src: c,
    },
    {
      src: d,
    },
    {
      src: e,
    },
    {
      src: f,
    },
  ];

  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction)=>{
    let newSlideNumber;
     
    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="img" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleMove("r")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St 125 new kkdfk</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=> handleOpen(i)} src={photo.src} alt="img" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">
                Stay in heart of Krakow
              </h1>
              <p className="hotelDesc">
                "But I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a complete
                account of the system, and expound the actual teachings of the great
                explorer of the truth, the master-builder of human happiness. No one 
                rejects, dislikes, or avoids pleasure itself, because it is pleasure,
                but because those who do not know how to pursue pleasure rationally 
                encounter consequences that are extremely painful. Nor again is there 
                anyone who loves or pursues or desires to obtain pain of itself, because
                it is pain, but because occasionally circumstances occur in which toil 
                and pain can procure him some great pleasure. To take a trivial example,
                which of us ever undertakes laborious physical exercise, except to obtain
                some advantage from it? But who has any right to find fault with a man who
                chooses to enjoy a pleasure that has no annoying consequences, or one who 
                avoids a pain that produces no resultant pleasure?"
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 80day stay!</h1>
              <span>
                Located in the real heart of krakow, this property has an excellent location score of 8.9!
              </span>
              <h2>
                <b>$555</b> (8 days)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}
