import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./footer.css"

const Footer = ({ siteTitle }) => (
    <footer
        style={{
            width: '100%',
            backgroundColor:'black',
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                width: '100%',
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <h3 
                style={{
                color: 'white',
            }}
            >
                Let's Talk
        </h3>
        <p
            style={{
                color:'white',
            }}
            >
                Want to learn more about my process or prices?<br />
                Reach out to me at <a href="mailto:admin@evanrobertson.ca" className="footer-links">admin@evanrobertson.ca</a><br />
                <a className="footer-links" href="https://www.instagram.com/evan_robertson.ca/">Instagram</a> | <a className="footer-links" href="https://www.linkedin.com/in/evan-robertson-468794192/">Linkedin</a>
            </p>
            <nav className="footer-nav"
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    borderTop:'1px solid white',
                }}
            >
                <Link to='/' className='footer-links'>
                    Portfolio
            </Link>
                <Link to='/about/' className='footer-links'>
                    About
            </Link>
                <Link to='/contact/' className='footer-links'>
                    Let's Talk
            </Link>
            </nav>
        </div>
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer
