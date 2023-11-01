import React, { useState } from "react";
import './contact.css';
import { Link } from "react-router-dom";
import { contactImages } from "../../assets/images/Images";
export function Contact() {
    const [display, setDisplay]=useState(false);

    const displayContact=()=>{
        setDisplay(!display);
    }
    let phone="https://api.whatsapp.com/send?phone=15128719848";
    return (
        <>
                
            <form action="mailto:jesushdzusa@gmail.com" method="post" encType="text/plain">
            <legend>Contact</legend>
            <fieldset id="form-links">
                    <Link target="_blank"
                        to="https://www.linkedin.com/in/jesus-angel-hernandez-martinez-5134a484?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9pdUqKEASoGxW5L1j03DHg%3D%3D"><img
                            class="contact-media" src={contactImages[1]} alt="Linkedin" /></Link>
                    <Link target="_blank" to={phone}><img
                            class="contact-media" src={contactImages[0]} alt="WhatsApp" /></Link>
                    <Link to="https://github.com/StarkNeo" target="_blank" rel="noopener noreferrer"><img
                            class="contact-media" src={contactImages[2]} alt="Github" /></Link>
                </fieldset>
                {display? 
                <fieldset id="form-data">
                    
                    <label htmlFor="subject">Subject: </label><br />
                    <input type="text" name="subject" placeholder="subject" /><br />
                    <label htmlFor="yourname">Name: </label><br />
                    <input type="text" name="yourname" placeholder="your name" /><br />
                    <label htmlFor="email">Email: </label><br />
                    <input type="email" name="email" placeholder="Your Email" /><br />
                    <label htmlFor="message">Message: </label><br />
                    <textarea name="message" rows="5" cols="30" placeholder="Your Message" /><br />
                    <input type="submit" value="Send" />
                </fieldset>
                :''}
                
                <input id="btn-display" type="button" onClick={displayContact} value={display?"«":"»"} />
                <input id="btn-display-resp" type="button" onClick={displayContact} value={display?"▲":"▼"} />
            </form>
            
        </>

    )
}