import React, {useState} from "react"
import { Nav, navLinks, Logo, Underline, mobileNav, visible, hidden , closeIcon} from "./styles/Navbar.module.css"
import { large } from "./styles/Container.module.css"
import logo from "../assets/images/brand.png"
import mobileLogo from "../assets/images/mobile-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"


const Header = ({title}) => {
   const [isMenuVisible, setIsMenuVisible] = useState(true);

  return (

    <nav className={ Nav }>
      <div className={ large }>
        <div className={ navLinks}>
          <Link to="#">
            <img src={logo} width="60px" className={Logo} alt="Jay Jariwala portfolio logo"/>
          </Link>
          <div className={mobileNav}>
            <Link to="#">
              <img
                src={logo}
                width="60px"
                className={mobileLogo}
                alt="Jay Jariwala portfolio logo"
              />
            </Link>
            <div onClick={() => setIsMenuVisible(toggle => !toggle)}>
            {isMenuVisible ? <FontAwesomeIcon icon={faWindowClose} size="2x" className={closeIcon}/> : <FontAwesomeIcon icon={faBars} size="2x"/>}

            </div>
          </div>
          <ul className={isMenuVisible ? visible : hidden }>
            <li>
              <Link to="/" className={`${Underline}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/work" className={`${Underline}`}>
                Work
              </Link>
            </li>
            {/* <li>
              <Link to="#" className={`${Underline}`}>
                Certifications`
              </Link>
            </li>
            <li>
              <Link to="#" className={`${Underline}`}>
                Blog
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header
