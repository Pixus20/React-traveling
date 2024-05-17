import React from 'react';
import './main.css';

import { FaClipboardCheck } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";


import img from '../../mediaFiles/Sea1.jpg';
import img2 from '../../mediaFiles/Sea2.jpg';
import img3 from '../../mediaFiles/Sea3.jpg';
import img4 from '../../mediaFiles/Sea4.jpg';
import img5 from '../../mediaFiles/Sea5.jpg';
import img6 from '../../mediaFiles/Sea6.jpg';

const Data =[
   {
      id:1,
      imgSrc:img,
      destTitle:'Bora Bora',
      location:'New Zealand',
      grade:'Cultural Relax',
      fees:'$700',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
   },
   {
      id:2,
      imgSrc:img2,
      destTitle:'Machu Picchu',
      location:'Peru',
      grade:'Cultural Relax',
      fees:'$1700',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
   },
   {
      id:3,
      imgSrc:img3,
      destTitle:'Great Barrier Reef',
      location:'Australia',
      grade:'Cultural Relax',
      fees:'$2700',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
   },
   {
      id:4,
      imgSrc:img4,
      destTitle:'Cappadocia',
      location:'Turkey',
      grade:'Cultural Relax',
      fees:'$1100',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
   },
   {
      id:5,
      imgSrc:img5,
      destTitle:'Guanajuato',
      location:'Mexico',
      grade:'Cultural Relax',
      fees:'$2800',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
   },
   {
      id:6,
      imgSrc:img6,
      destTitle:'Cinque Terre',
      location:'Italy',
      grade:'Cultural Relax',
      fees:'$4700',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
   },
   {
      id:7,
      imgSrc:img4,
      destTitle:'Angkor Wat',
      location:'Cambodia',
      grade:'Cultural Relax',
      fees:'$3100',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
   },
   {
      id:8,
      imgSrc:img3,
      destTitle:'Taj Mahal',
      location:'India',
      grade:'Cultural Relax',
      fees:'$1900',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
   },
   {
      id:9,
      imgSrc:img2,
      destTitle:'Bali Island',
      location:'Indonesia',
      grade:'Cultural Relax',
      fees:'$2500',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
   },
]
const Main = () => {
   return (
      <section className="main container section">
         <div className="secTitle">
            <h3 className="title">
               Most visited destinations
            </h3>
         </div>
         <div className="secContent grid">
         {
            Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
               return(
                  <div key={id} className="singleDestination">
                     <div className="imageDiv">
                        <img src={imgSrc} alt={destTitle} />
                     </div>
                     <div className="cardInfo">
                        <h4 className="destTitle">
                           {destTitle}
                        </h4>
                        <span className="continent flex">
                           <HiOutlineLocationMarker  className='icon'/>
                           <span className="name">{location}</span>
                        </span>
                        <div className="fees flex">
                           <div className="grade">
                              <span>{grade}<small>+1</small></span>
                           </div>
                           <div className="price">
                              <h5>{fees}</h5>
                           </div>
                        </div>
                        <div className="desc">
                           <p>{description}</p>
                        </div>
                        <button className="btn flex">
                           DETAILS
                           <FaClipboardCheck  className='icon'/>
                        </button>
                     </div>
                  </div>
               )
            })
         }
         </div>
      </section>
   )
}

export default Main