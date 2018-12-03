import React from 'react'
import { Link } from 'gatsby'
import { Spring } from 'react-spring'

import {
  getCircleConfig
} from './anime'

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="header-shape header-shape-1">
      <svg width="337" height="222" viewBox="0 0 337 222" xmlns="http://www.w3.org/2000/svg">
          <defs>
              <linearGradient x1="50%" y1="55.434%" x2="50%" y2="0%" id="header-shape-1">
                <stop stopColor="#F4FF4A" stopOpacity="0" offset="0%"/>
                <stop stopColor="#F9FF97" offset="100%"/>
              </linearGradient>
          </defs>
          <path d="M1103.21 0H1440v400h-400c145.927-118.557 166.997-251.89 63.21-400z" transform="translate(-1103)" fill="url(#header-shape-1)" fillRule="evenodd"/>
      </svg>
    </div>
    <div className="header-shape header-shape-2">
      <svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" style={{overflow:"visible"}}>
          <defs>
              <linearGradient x1="93.05%" y1="19.767%" x2="15.034%" y2="85.765%" id="header-shape-2">
                  <stop stopColor="#ffdb97" offset="0%"/>
                  <stop stopColor="#ffc14a" offset="100%"/>
              </linearGradient>
          </defs>
          <Spring
            from={{
              transform: 'translateY(40px)',
              opacity: 0
            }}
            to={{
              transform: 'translateY(0px)',
              opacity: 1
            }}
            delay={1300}
            config={key => getCircleConfig[key]}
          >{props => (
            <circle className="anime-element fadeup-animation" style={props} cx="64" cy="64" r="64" fill="url(#header-shape-2)" fillRule="evenodd"/>
          )}
          </Spring>
      </svg>
    </div>
    <div className="container">
      <div className="site-header-inner">
        <div className="brand header-brand">
          <h1 className="m-0">
            <Link
              to="/"
            >
              <svg width="165" height="24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path fill="#000" d="M0 0h15v24H0z"/>
                  <path fill="#FFF" d="M1.266 5.811h12.342V22.99H1.266z"/>
                  <path fill="#FCE900" d="M1.266 1.263h12.342v3.158H1.266z"/>
                  <path fillOpacity=".3" fill="#F5A623" d="M1.203 3.347h12.342V4.61H1.203z"/>
                  <path fillOpacity=".15" fill="#D8D8D8" d="M1.266 18.126L13.544 5.874v17.115H1.266z"/>
                  <text fontFamily="Montserrat-ExtraBold, Montserrat" fontSize="22" fontWeight="600" fill="#080303" transform="translate(0 -2)">
                    <tspan x="23.583" y="21">Life Outside</tspan>
                  </text>
                </g>
              </svg>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  </header>
)

export default Header
