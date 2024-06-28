import React from "react";
import './Footer.css';

const Footer = () => {
    return (
            <div id='footer' className=''>
                <div className="nav">
                <div className="information">
                    <p className='supporting-information'>Get to Know Us</p>
                    <div className="list-information">
                        <ul>
                            <li>Careers</li>
                            <li>About GovDeals</li>
                            <li>About Liquidity Services</li>
                            <li>In The News</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
                <div className="information">
                    <p className='supporting-information'>Buy From Us</p>
                    <div className="list-information">
                        <ul>
                            <li>How To Buy</li>
                            <li>Why Buy</li>
                            <li>Store Directory</li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className='nav'>
                    <div className='navbar'>
                        <ul>
                            <li>About Us</li>
                            <li>Buy</li>
                            <li>Sell</li>
                            <li>FAQ</li>
                            <li>Contact Us</li>
                            <li>View Canada</li>
                        </ul>
                    </div>
                    <div className='navbar'>
                        <ul>
                            <li>Sign In</li>
                            <li>Register</li>
                        </ul>
                    </div>
                </div>
                <div className='search-area'>
                    <div className='search'>
                        <div className='search-group'>
                            <input type='text' className='input' placeholder='Search Assets'/>
                            <i class='bx bx-search search-icon'></i>
                        </div>
                        <span className='search-advanced'>Advanced Search</span>
                    </div>
                </div>
    
                <div className='button'>
                <ul>
                            <li>Shop By Category</li>
                            <li>Location Search</li>
                            <li>Closing Today</li>
                            <li>New Listings</li>
                            <li>View All</li>
                            
                        </ul>
                </div>
    
            </div>
    )
}

export default Footer;