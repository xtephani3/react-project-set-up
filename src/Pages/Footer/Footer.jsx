import "./Footer.css";

import ChevronRight from "../../assets/svgs/chevron-right.svg?react";
import FacebookIcon from "../../assets/svgs/contact/facebook.svg?react";
import InstagramIcon from "../../assets/svgs/contact/instagram.svg?react";
import PinterestIcon from "../../assets/svgs/contact/pinterest.svg?react";
import TwitterIcon from "../../assets/svgs/contact/twitter.svg?react";

import EnvelopeIcon from "../../assets/svgs/contact/envelope.svg?react";
import MapPinIcon from "../../assets/svgs/contact/map-pin.svg?react";
import TelephoneIcon from "../../assets/svgs/contact/telephone.svg?react";

export function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-contents">
        <div className="footer-contacts">
          <div className="footer-contacts-main">
            <div className="contact-item">
              <div className="icon">
                 <MapPinIcon/>
              </div>
              <div className="info">
                <span>Address:</span>
                <b>1925 Boggess Street</b>
              </div>
            </div>

            <div className="divider" />

            <div className="contact-item">
              <div className="icon">
                <TelephoneIcon/>
              </div>
              <div className="info">
                <span>Phone:</span>
                <b>(00) 875 784 568</b>
              </div>
            </div>

            <div className="divider" />

            <div className="contact-item">
              <div className="icon">
                <EnvelopeIcon/>
              </div>
              <div className="info">
                <span>Email:</span>
                <b>info@gmail.com</b>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-about">
            <div className="brand">
              <img src="/images/brand-footer.png" />
            </div>
            <p>
              Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt
              tortor aliqua mfacilisi cras fermentum odio eu.
            </p>
            <div className="footer-about-contacts">
              <FacebookIcon />
              <InstagramIcon />
              <PinterestIcon />
              <TwitterIcon />
            </div>
          </div>

          <div className="footer-services">
            <h4>Our Services</h4>

            <div className="service-list">
              <p>
                <ChevronRight /> <span>Web development</span>
              </p>
              <p>
                <ChevronRight /> <span>UI/UX Design</span>
              </p>
              <p>
                <ChevronRight /> <span>Management</span>
              </p>
              <p>
                <ChevronRight /> <span>Digital Marketing</span>
              </p>
              <p>
                <ChevronRight /> <span>Blog News</span>
              </p>
            </div>
          </div>

          <div className="footer-gallery">
            <h4>Gallery</h4>

            <div className="gallery-grid">
              <div className="image">
                <img src="/images/gallery/1.png" alt="" />
              </div>
              <div className="image">
                <img src="/images/gallery/2.png" alt="" />
              </div>
              <div className="image">
                <img src="/images/gallery/3.png" alt="" />
              </div>
              <div className="image">
                <img src="/images/gallery/4.png" alt="" />
              </div>
              <div className="image">
                <img src="/images/gallery/5.png" alt="" />
              </div>
              <div className="image">
                <img src="/images/gallery/6.png" alt="" />
              </div>
            </div>
          </div>

          <div className="footer-subscribe">
            <h4>Subscribe</h4>

            <div className="form">
              <input type="text" placeholder="Enter your email:" />
              <div>
                <button>SUBSCRIBE NOW</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-credits">
          <p>
            Copyright © 2024 <span>edunity</span> || All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
