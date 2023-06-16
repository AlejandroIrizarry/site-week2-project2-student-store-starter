import Facebook from "../../Icons/Facebook"
import Instagram from "../../Icons/Instagram"
import LinkedIn from "../../Icons/LinkedIn"
import Twitter from "../../Icons/Twitter"
import happy_person from "../../assets/happy_person.svg"
import "./Contact.css"

export default function Contact() {
    return (
        <div id="Contact" className="contact">
            <div className="content">
                <h3>Contact Us</h3>
                <div className="summary">
                    <ul className="info">
                        <li>
                            <span className="label">Email:</span>
                            <span>codepath.org</span>
                        </li>
                        <li>
                            <span className="label">Phone:</span>
                            <span>1-800-CODEPATH</span>
                        </li>
                        <li>
                            <span className="label">Address:</span>
                            <span>123 Fake Street, San Francisco, CA</span>
                        </li>
                        <li>
                            <span className="label">Socials:</span>
                            <span>
                                <Facebook fill="var(--pure-white)"/>
                                <Instagram fill="var(--pure-white)"/>
                                <LinkedIn fill="var(--pure-white)" />
                                <Twitter fill="var(--pure-white)"/>
                            </span>
                        </li>
                    </ul>
                    <div className="media">
                        <img src={happy_person} alt="codepath large" />
                    </div>
                </div>
            </div>
        </div>
    )
}