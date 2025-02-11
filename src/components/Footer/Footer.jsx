import React, { useEffect } from 'react';
import './footer.css';

import videoFooter from '../../mediaFiles/PlaneBg.mp4';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { FaChevronRight, FaInstagram, FaTripadvisor, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";

const Footer = () => {
   useEffect(()=>{
      Aos.init({duration: 2000})
   },[])
   return (
      <section  className="footer">
         <div className="videoDiv">
            <video src={videoFooter} loop muted autoPlay type='video/mp4'></video>
         </div>
         <div className="secContent container">
            <div className="contactDiv flex">
               <div data-aos="fade-up" className="text">
                  <small>KEEP IN TOUCH</small>
                  <h2>Travel with us</h2>
               </div>
               <div data-aos="fade-up" className="inputDiv flex">
                  <input type="text" placeholder='Enter yor Email...' />
                  <button className="btn flex "type='submit'>
                  SEND
                  <FiSend  className='icon'/>
                  </button>
               </div>
            </div>
            <div  className="footerCard flex">
               <div className="footerIntro flex">
                  <div className="logoDiv">
                     <a href="#" className='logo flex'>
                     <MdTravelExplore  className='icon'/>Travel
                     </a>
                  </div>
                  <div data-aos="fade-up" className="footerParagraph">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Animi repellendus necessitatibus beatae mollitia nobis sit veritatis iusto, quam, 
                     debitis quis optio quidem quasi tenetur dolore perspiciatis sequi cupiditate at similique.
                  </div>
                  <div data-aos="fade-up" className="footerSocials flex">
                  <FaTwitter className='icon'/>
                  <FaYoutube className='icon'/>
                  <FaInstagram  className='icon'/>
                  <FaTripadvisor className='icon'/>

                  </div>
               </div>
               <div className="footerLinks grid">
                  {/* Group One */}
                  <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                     <span className="groupTitle">
                        OUR AGENCY
                     </span>
                     <li className="footerList flex">
                        <FaChevronRight  className='icon'/>
                        Services
                     </li>
                     <li className="footerList flex">
                        <FaChevronRight  className='icon'/>
                        Insurance
                     </li>
                     <li className="footerList flex">
                        <FaChevronRight  className='icon'/>
                        Agency
                     </li>
                     <li className="footerList flex">
                        <FaChevronRight  className='icon'/>
                        Tourism
                     </li>
                     <li className="footerList flex">
                        <FaChevronRight  className='icon'/>
                        Payment
                     </li>
                  </div>
                  {/* Group two */}
                  <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                     <span className="groupTitle">
                        PARTNERS
                     </span>
                     <li className="footerList flex">
                        <FaChevronRight  className='icon'/>
                        Bookings
                     </li>
                     <li className="footerList flex">
                        <FaChevronRight  className='icon'/>
                        Rentcars
                     </li>
                     <li className="footerList flex">
                        <FaChevronRight  className='icon'/>
                        HostelWorld
                     </li>
                     <li className="footerList flex">
                        <FaChevronRight  className='icon'/>
                        Trivago
                     </li>
                     <li className="footerList flex">
                        <FaChevronRight  className='icon'/>
                        TripAdvisor
                     </li>
                  </div>
                  {/* Group three */}
                  <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                     <span className="groupTitle">
                        LAST MINUTE
                     </span>
                     <li className="footerList flex">
                        <FaChevronRight  className='icon'/>
                        London
                     </li>
                     <li className="footerList flex">
                        <FaChevronRight  className='icon'/>
                        California
                     </li>
                     <li className="footerList flex">
                        <FaChevronRight  className='icon'/>
                        Indonesia
                     </li>
                     <li className="footerList flex">
                        <FaChevronRight  className='icon'/>
                        Europe
                     </li>
                     <li className="footerList flex">
                        <FaChevronRight  className='icon'/>
                        Oceania
                     </li>
                  </div>
               </div>
               <div  className="footerDiv flex">
                  <small>BEST TRAVEL WEBSITE THEME</small>
                  <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
               </div>
            </div>
         </div>
         
      </section>
   )
}

export default Footer