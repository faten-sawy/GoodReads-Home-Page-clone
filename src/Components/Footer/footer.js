import React from "react";
import * as styled from "./footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styled.container}>
      <div>
        <ul>
          <li>COMPANY</li>
          <li>
            <Link> About us</Link>
          </li>
          <li>
            <Link>Careers</Link>
          </li>
          <li>
            <Link>Terms</Link>
          </li>
          <li>
            <Link>Privacy</Link>
          </li>
          <li>
            <Link>Interest Based Ads</Link>
          </li>
          <li>
            <Link>Ad Preferences</Link>
          </li>
          <li>
            <Link>Help</Link>
          </li>
        </ul>
        <ul>
          <li>WORK WITH US</li>
          <li>
            <Link>Authors</Link>
          </li>
          <li>
            <Link>Advertise</Link>
          </li>
          <li>
            <Link>Authors & ads blog</Link>
          </li>
          <li>
            <Link>API</Link>
          </li>
        </ul>
      </div>
      <div className={styled.connect}>
        <h6> Connect</h6>
        <ul>
          <i class={`bi bi-facebook ${styled.item}`}></i>
          <i class={`bi bi-twitter ${styled.item}`}></i>
          <i class={`bi bi-instagram ${styled.item}`}></i>
          <i class={`bi bi-linkedin ${styled.item}`}></i>
        </ul>
      </div>
      <div className={styled.download}>
        <img src="//s.gr-assets.com/assets/app/badge-ios-desktop-homepage-6ac7ae16eabce57f6c855361656a7540.svg" />
        <img src="//s.gr-assets.com/assets/app/badge-android-desktop-home-0f517cbae4d56c88a128d27a7bea1118.png" />
      </div>
      <p>© 2021 Goodreads, Inc.</p>
    </div>
  );
}
export default Footer;
