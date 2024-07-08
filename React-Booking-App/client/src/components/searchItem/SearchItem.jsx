import "./searchItem.css"
import si from "./img/si.jpg"
import React from 'react'

export default function SearchItem() {
  return (
    <div className="searchItem">
        <img 
            src={si} 
            alt="img" className="siImg" 
        />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubTitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire studio + 1 bathroom + 1 full bed
            </span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.0</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">Rs-333</span>
                <span className="siTaxOp">Includes taxes and fares</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}
