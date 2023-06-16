import app_store from "../../assets/app_store.svg"
import google_play from "../../assets/google_play.svg"
import american_express from "../../assets/american_express.svg"
import mastercard from "../../assets/mastercard.svg"
import paypal from "../../assets/paypal.svg"
import visa from "../../assets/visa.svg"

import "./Footer.css"

const links = {
    Categories: ["All Categories", "Clothing", "Food", "Accessories", "Tech"],
    Company: ["About Us", "Find a Store", "Terms", "Sitemap", "Careers"],
    Support: ["Contact Us", "Money Refund", "Order Status", "Shipping Info", "Open Dispute"],
    Account: ["Login", "Register", "Account Setting", "My Orders"],
    Socials: ["Facebook", "Twitter", "LinkedIn", "Instagram", "YouTube"],
  }

  const Column = ({title, links}) => {
    return (
        <div className="link-column">
            <h4>{title}</h4>
            <ul>
                {links.map((link) => (
                    <li key={link}>
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    )
  }

export default function Footer() {
    return (
        <footer className="footer">
            <div className="content">
                <div className="top">
                    <div className="links">
                        {Object.keys(links).map((columnTitle) => (
                            <Column key={columnTitle} title={columnTitle} links={links[columnTitle]} />
                        ))}
                        <div className="link-column">
                            <h4>Our App</h4>
                            <ul>
                                <li>
                                    <img src={app_store} alt="app store" />
                                </li>
                                <li>
                                    <img src={google_play} alt="google play store" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <span className="payment-options">
                        <img src={american_express} alt="american express" />
                        <img src={mastercard} alt="mastercard" />
                        <img src={paypal} alt="paypal" />
                        <img src={visa} alt="visa" />
                    </span>
                </div>
            </div>
        </footer>
    )
}