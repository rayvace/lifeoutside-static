import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import appleIcon57 from '../images/apple-icon-57x57.png'
import favicon96 from '../images/favicon-96x96.png'
import favicon32 from '../images/favicon-32x32.png'
import favicon16 from '../images/favicon-16x16.png'
import androidIcon192 from '../images/android-icon-192x192.png'
import appleIcon60 from '../images/apple-icon-60x60.png'
import appleIcon72 from '../images/apple-icon-72x72.png'
import appleIcon76 from '../images/apple-icon-76x76.png'
import appleIcon114 from '../images/apple-icon-114x114.png'
import appleIcon144 from '../images/apple-icon-144x144.png'
import appleIcon120 from '../images/apple-icon-120x120.png'
import appleIcon152 from '../images/apple-icon-152x152.png'
import appleIcon180 from '../images/apple-icon-180x180.png'

import '../styles/style.scss'

class Layout extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: 'A fun and easy way to have other plan for you and for you to plan for others. Simply share a city or region, a date range, and categories of interest to start. In return, you get a list of event recommendations from the community. If you enjoy to plan, use our bookmarklet to capture events and build lists for your friends that they can use offline, wherever they are. All for free.'
                },
                {
                  name: 'keywords',
                  content: 'events, itinerary, lifeoutside, trylifeoutside, crowdsource, planning'
                },
              ]}
            >
              <html lang="en" />
              <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,900|Open+Sans:400,700" rel="stylesheet" />
              <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57} />
              <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60} />
              <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72} />
              <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76} />
              <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114} />
              <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120} />
              <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144} />
              <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152} />
              <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180} />
              <link rel="icon" type="image/png" sizes="192x192" href={androidIcon192} />
              <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
              <link rel="icon" type="image/png" sizes="96x96" href={favicon96} />
              <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
              <meta name="msapplication-TileColor" content="#ffffff"/>
              <meta name="msapplication-TileImage" content="../images/ms-icon-144x144.png"/>
              <meta name="theme-color" content="#ffffff"/>
              <body className="is-boxed has-animations" />
            </Helmet>
            <div className="body-wrap boxed-container">
              <Header siteTitle={data.site.siteMetadata.title} />
              {this.props.children}
              <Footer />
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
