import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        width: '100%',
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent:'space-between',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav
        style={{
          display: 'flex',
        }}
      >
        <Link to='/' className='header-links'>
          Portfolio
            </Link>
        <Link to='/about/' className='header-links'>
          About
            </Link>
        <Link to='/contact/' className='header-links-box'>
          Let's Talk
            </Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
