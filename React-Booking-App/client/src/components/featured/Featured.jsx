import "./featured.css"
import paris from "./img/paris.jpg"
import venice from "./img/venice.jpg"
import italy from "./img/italy.jpg"
import React from 'react'

export default function Featured() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img 
              src= {venice} 
              alt="hp"
              className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>Venice</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
              src= {paris}
               alt="hp"
               className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>Paris</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
              src= {italy}
               alt="hp"
               className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>Italy</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  )
}
