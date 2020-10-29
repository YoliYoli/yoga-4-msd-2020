import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import yoga_logo from "../images/yoga_logo.svg"



const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `maximumbluepurple`,
      // marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `40`,
        minWidth: `960`,
        padding: `1.45rem 0 0 0`,
      }}
    >
      {/* <h1 style={{ margin: 0 }}> */}
        {/* <Link
          to="/"
          style={{
            color: `rebeccapurple`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link> */}
        <img src={yoga_logo} alt="Logo" style={{height:`100px`, width:`150px`, objectFit:`cover`, }}/>
      {/* s</h1> */}
      <ul style={{ listStyle: `none`, float: `right` }}>
          {/* <ListLink to="/">Home</ListLink> */}
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/programs/">Programs</ListLink>
          <ListLink to="/community/">Partners</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
      </ul>
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
