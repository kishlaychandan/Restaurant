import React from 'react'
import style from './Contact.module.css'
import { BsFillTelephonePlusFill } from "react-icons/bs";
import Card from './card/Card'
import { FaHome } from "react-icons/fa";
function Contact() {
  return (
    <>
    <div className={style.contact}>
        <div className={style.left}>
            <h3>contact</h3>
            <h1>GET IN TOUCH WITH US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco</p>
            <Card icon={<FaHome />} heading="Our Location" text="99 S.t Jomblo Park Pekanbaru 28292. Indonesia" />
            <Card icon={<BsFillTelephonePlusFill />} heading="Phone Number" text="(+62)81 414 257 9980" />
            <Card icon={<FaHome />} heading="Email Address" text="info@yourdomain.com" />
        </div>
        <div className={style.right}>
            <form action="">
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Your Email' />
                <input type="number" placeholder='Enter Number'/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                <button>Send Message</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact