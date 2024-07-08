import "./propertyList.css"
import React from 'react'
import hotel from "./img/hotel.jpg"
import cabin from "./img/cabin.jpg"
import villa from "./img/villa.jpg"
import resort from "./img/resort.jpg"
import apartment from "./img/apartment.jpg"

export default function PropertyList() {
  return (
    <div className="pList">
        <div className="pListItem">
            <img 
                src={hotel}
                alt="pListItem"
                className="plistImg"
            />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img 
                src={resort}
                alt="pListItem"
                className="plistImg"
            />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img 
                src={apartment}
                alt="pListItem"
                className="plistImg"
            />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img 
                src={villa}
                alt="pListItem"
                className="plistImg"
            />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img 
                src={cabin}
                alt="pListItem"
                className="plistImg"
            />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
    </div>
  )
}
