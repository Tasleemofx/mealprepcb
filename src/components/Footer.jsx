import React, {useState} from "react";
import logo from "./images/logo-ikook.svg"
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa"

import "../styles/Footer.css"
const Footer=()=>{
    const [email, setEmail] = useState('')
    return(
        <footer>
            <div className="subscribe">
                <h1>Join our newsletter</h1>
                <form>
                    <input type="text" value={email}
                    onChange={(e)=> setEmail(e.target.value)}/>
                    <button>Subscribe</button>
                </form>
            </div>
            <div className="footer-grid">
                <div>
                    <img src={logo} alt="steam logo"/>
                </div>
                <ul>
                    <li>It's chef time in your kitchen</li>
                    <li>Sign up to get a 10% discount on your first booking</li>
                    <li className="media">
                        <AiFillFacebook />
                        <FaTwitterSquare/>
                        <AiFillInstagram/>
                        <AiFillLinkedin/>
                    </li>
                    <li>Copyright &copy; 2022 Ikook. All Rights Reserved</li>
                </ul>
                    <div className="f-row">
                        <ul>
                            <li>About Us</li>
                            <li>How it works</li>
                            <li>Faqs</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                        <ul>
                            <li>Sign Up as Chef</li>
                            <li>Gift Experience</li>
                            <li>Book a Private Chef</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <ul>
                        <li>+442038078500</li>
                        <li>team@ikook.co.uk</li>
                    </ul>
            </div>
        </footer>
    )
}


export default Footer;