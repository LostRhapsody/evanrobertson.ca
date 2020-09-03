import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import { Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar expand="lg">
      <Navbar.Brand href="/"><h1>{siteTitle}</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarResponsive" />
      <Navbar.Collapse id="navbarResponsive">
        <Nav className="ml-auto">
          <Nav.Item>
            <Link to="/" className="nav-link header-links" activeClassName="active">Portfolio</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about" className="nav-link header-links" activeClassName="active">About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/contact" className="nav-link header-links-box" activeClassName="active">Let's Talk</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
