import React from 'react';
import Style from '../Stylesheets/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faXTwitter as faTwitter } from '@fortawesome/free-brands-svg-icons';
import footerIcon from '../Assets/footer.svg';

const Footer = () => {
  return (
    <div>
      <header></header>
      <footer>
        <div id={Style.footer}>
          <div id={Style.footerContent}>
            <p id={Style.footerTitle}>CODEBREAKERS</p>
            <p id={Style.footerTag}>Seasoned. Nimble. Remote.</p>
            <p id={Style.footerInfo}>Text about club</p>
            <hr id={Style.footerLine} />

            <img src={footerIcon} id={Style.footerImage} alt="footer-img"></img>

            <div id={Style.footerRedirects}>
              <div id={Style.footerCopyright}>
                <FontAwesomeIcon icon={faCopyright} />
                <p id={Style.footerCopyrightText}>Copyright Codebreakers</p>
              </div>
              <div id={Style.footerTerms}>
                <ul>
                  <li><a href="google.com">Terms</a></li>
                  <li><a href="google.com">Privacy</a></li>
                  <li><a href="google.com">Cookies</a></li>
                </ul>
              </div>
              <div id={Style.footerSocial}>
                <div id={Style.footerLinkedin}>
                  <a href="google.com">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
                <div id={Style.footerInstagram}>
                  <a href="google.com">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
                <div id={Style.footerX}>
                  <a href="google.com">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
