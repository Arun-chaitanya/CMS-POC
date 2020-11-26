import React from "react";

import "./styles.scss";

function Footer(props) {
    return (
        <div className="footer">
            <div className = "footer__content">

                <div className="footer__contentPartners">
                    <h5 className="footer__topic">PARTNERS</h5>
                    <p className="footer__subtopic">Flipkart</p>
                    <p className="footer__subtopic">Amazon</p>
                    <p className="footer__subtopic">MakeMyTrip</p>
                    <p className="footer__subtopic">View all partners</p>
                </div>

                <div className="footer__contentGuides">
                    <h5 className="footer__topic">ZESTMONEY GUIDES</h5>
                    <p className="footer__subtopic">FAQs</p>
                    <p className="footer__subtopic">Shop Smartly</p>
                    <p className="footer__subtopic">EMI Guides</p>
                </div>
                <div className="footer__contentCompany">
                    <h5 className="footer__topic">COMPANY</h5>
                    <p className="footer__subtopic">About Us</p>
                    <p className="footer__subtopic">Partner with us</p>
                    <p className="footer__subtopic">Lending Partners</p>
                    <p className="footer__subtopic">Privacy Policy</p>
                    <p className="footer__subtopic">Terms and Conditions</p>
                    <p className="footer__subtopic">Complaints</p>
                    <p className="footer__subtopic">ISO Certificate</p>
                    <p className="footer__subtopic">DLAI Code of Conduct</p>
                </div>
                <div className="footer__contentLogo">
                    <img src="https://d16pnh712pyiwa.cloudfront.net/wp-content/uploads/2020/05/Zest-Logo_300-98-02-1.png" alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Footer;