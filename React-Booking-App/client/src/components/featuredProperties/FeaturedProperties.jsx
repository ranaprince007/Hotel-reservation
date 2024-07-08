import "./featuredProperties.css"
import React from 'react'
import i from "./img/1.jpg"

export default function FeaturedProperties() {
  return (
    <div className="fp">
        <div className="fpItem"> 
            <img src={i} alt="favourites" 
            className="fpImg" 
            />
            <span className="fpName">Hotel Taj</span>
            <span className="fpCity">Mumbai</span>
            <span className="fpPrice">Starting from $1200</span>
            <div className="fpRating">
                <button>10</button>
                <span>Best</span>
            </div>
        </div>
        <div className="fpItem">
            <img src={i} alt="favourites" 
            className="fpImg" 
            />
            <span className="fpName">Hotel Taj</span>
            <span className="fpCity">Mumbai</span>
            <span className="fpPrice">Starting from $1200</span>
            <div className="fpRating">
                <button>10</button>
                <span>Best</span>
            </div>
        </div>
        <div className="fpItem">
            <img src={i} alt="favourites" 
            className="fpImg" 
            />
            <span className="fpName">Hotel Taj</span>
            <span className="fpCity">Mumbai</span>
            <span className="fpPrice">Starting from $1200</span>
            <div className="fpRating">
                <button>10</button>
                <span>Best</span>
            </div>
        </div>
        <div className="fpItem">
            <img src={i} alt="favourites" 
            className="fpImg" 
            />
            <span className="fpName">Hotel Taj</span>
            <span className="fpCity">Mumbai</span>
            <span className="fpPrice">Starting from $1200</span>
            <div className="fpRating">
                <button>10</button>
                <span>Best</span>
            </div>
        </div>
    </div>
  )
}
