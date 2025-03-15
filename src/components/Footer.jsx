import React from "react"
import * as styles from "./styles/Footer.module.css"
import { faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer() {
  return <div className={styles.footer}>
          <span>Find me on</span>
          <div className={styles.iconContainer}>
            <a href="https://www.github.com/jayjariwala" target="new">
						<FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.instagram.com/jay.codes" target="new">
  					<FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.twitter.com/_deadlocked" target="new">
					   <FontAwesomeIcon icon={faTwitter} size="2x" />
           </a>
          </div>
          <span className={styles.copyright}>Jay Jariwala © {new Date().getFullYear() || "1992 - 2024"}</span>
  </div>
}
