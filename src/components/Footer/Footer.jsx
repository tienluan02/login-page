import React from "react";
import "./Footer.css";
import Allsurplus from "../../assets/images/allsurplus.jpg";
import GovDeals from "../../assets/images/logo.png";
import Machinio from "../../assets/images/machinio.jpg";
import Liquidation from "../../assets/images/liquidation.jpg";
import Bid4Assets from "../../assets/images/bid4assets.jpg";
import Secondipity from "../../assets/images/secondipity.jpg";
import { logoLinkedin } from 'ionicons/icons';
import { logoFacebook } from "ionicons/icons";
import { logoTwitter } from "ionicons/icons";
import { logoYoutube } from "ionicons/icons";

const Footer = () => {
  return (
    <div id="footer" className="container">
      <div className="left-column">
        <div className="information-box">
        <div className="information">
          <h3>Get to Know Us</h3>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">About GovDeals</a>
            </li>
            <li>
              <a href="#">About Liquidity Services</a>
            </li>
            <li>
              <a href="#">In The News</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div className="information">
          <h3>Sell With Us</h3>
          <ul>
            <li>
              <a href="">How To Sell</a>
            </li>
            <li>
              <a href="">Become A Seller</a>
            </li>
          </ul>
        </div>
        <div className="information">
          <h3>Buy From Us</h3>
          <ul>
            <li>
              <a href="">How To Buy</a>
            </li>
            <li>
              <a href="">Why Buy</a>
            </li>
            <li>
              <a href="">Store Directory</a>
            </li>
          </ul>
        </div>
        <div className="information">
          <h3>Need Help?</h3>
          <ul>
            <li>
              <a href="">Advanced Search</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">VPAT (PDF)</a>
            </li>
            <li>
              <a href="">Financing</a>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div className="right-column">
        <h3>Liquidity Services Brands</h3>
        <div className="right-column-top">
          <div className="brands">
            <div className="brand">
              <img src={Allsurplus} alt="AllSurplus" width="120" height="68" />
              <p>Surplus Aggregator</p>
            </div>
            <div className="brand">
              <img
                src={Liquidation}
                alt="Liquidation.com"
                width="120"
                height="68"
              />
              <p>Retail Surplus</p>
            </div>
            <div className="brand">
              <img src={Bid4Assets} alt="Bid4Assets" width="120" height="68" />

              <p>Property Surplus</p>
            </div>
            <div className="brand">
              <img src={Machinio} alt="Machinio" width="120" height="68" />
              <p>Machinery Surplus</p>
            </div>
            <div className="brand">
              <img src={GovDeals} alt="GovDeals" width="120" height="68" />
              <p>Government Surplus</p>
            </div>
            <div className="brand">
              <img
                src={Secondipity}
                alt="Secondipity"
                width="120"
                height="68"
              />
              <p>Consumer Surplus</p>
            </div>
          </div>
        </div>
        <div className="right-column-bottom">
            <h3>Subscribe</h3>
            <h3>Follow Us</h3>
            <p><a href="">Manage References</a></p>
            <div className="contact">
            <img src={logoFacebook} alt="Facebook" className="contact-logo"/>
            <img src={logoLinkedin} alt="LinkedIn" className="contact-logo"/>
            <img src={logoTwitter} alt="Twitter" className="contact-logo"/>
            <img src={logoYoutube} alt="YouTube" className="contact-logo"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
