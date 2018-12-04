import React from 'react'
import Fade from 'react-reveal/Fade';
import { Spring } from 'react-spring'

import Layout from '../components/layout'
import {
  getHeroConfig,
  getMockupConfig,
  getCircleConfig
} from '../components/anime'

const IndexPage = () => (
  <Layout>
  <main>
    <section className="hero">
        <div className="container">
            <div className="hero-inner">
                <div className="hero-copy">
                  <h1 className="hero-title mt-0">A curated list of arts & entertainment in your city</h1>
                  <p className="hero-paragraph">
                    Whether you&#8217;re looking for family friendly local activities or the best mountains to ski on the other side of the world,
                    you&#8217;ll find it here.
                  </p>
                  <form name="contact-top" method="POST" action="/thanks" netlify>
                    <div className="hero-form field field-grouped">
                      <div className="control control-expanded">
                        <input className="input" type="email" name="email" placeholder="Your best email&hellip;"/>
                      </div>
                      <div className="control">
                        <button className="button button-primary button-block" type="submit">Early access</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="hero-app">
                  <div className="hero-illustration">
                    <div className="hero-shape hero-shape-1">
                      <svg width="40" height="40"  style={{overflow:"visible"}}>
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
                        <circle className="anime-element fadeup-animation" style={props} cx="20" cy="20" r="20" fill="#CCFC00" fillRule="evenodd"/>
                      )}
                      </Spring>
                      </svg>
                    </div>
                    <div className="hero-shape hero-shape-2">
                      <svg width="88" height="88"  style={{overflow:"visible"}}>
                        <Spring
                          from={{
                            transform: 'translateY(40px)',
                            opacity: 0
                          }}
                          to={{
                            transform: 'translateY(0px)',
                            opacity: 1
                          }}
                          delay={1450}
                          config={key => getCircleConfig[key]}
                        >{props => (
                          <circle className="anime-element fadeup-animation" style={props} cx="44" cy="44" r="44" fill="#DCFF4A" fillRule="evenodd"/>
                        )}
                        </Spring>
                      </svg>
                    </div>
                    <div className="hero-main-shape">
                      <svg width="940" height="647" viewBox="0 0 940 647"  xlinkHref="http://www.w3.org/1999/xlink" style={{overflow:"visible"}}>
                        <defs>
                          <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="hero-illustration-a">
                            <stop stopColor="#FEFBFB" offset="0%"/>
                            <stop stopColor="#f9e6e9" offset="100%"/>
                          </linearGradient>
                          <linearGradient x1="89.764%" y1="16.809%" x2="11.987%" y2="82.178%" id="hero-illustration-b">
                            <stop stopColor="#FC8464" offset="0%"/>
                            <stop stopColor="#FB5C32" offset="100%"/>
                          </linearGradient>
                          <linearGradient x1="100%" y1="23.096%" x2="4.439%" y2="96.586%" id="hero-illustration-c">
                            <stop stopColor="#1ADAB7" offset="0%"/>
                            <stop stopColor="#55EBD0" offset="100%"/>
                          </linearGradient>
                          <filter x="-13%" y="-150%" width="126.1%" height="400%" filterUnits="objectBoundingBox" id="hero-illustration-d">
                            <feGaussianBlur stdDeviation="32" in="SourceGraphic"/>
                          </filter>
                          <linearGradient x1="0%" y1="100%" x2="46.694%" y2="42.915%" id="hero-illustration-f">
                            <stop stopColor="#EEF1FA" offset="0%"/>
                            <stop stopColor="#FFF" offset="100%"/>
                          </linearGradient>
                          <rect id="hero-illustration-e" width="800" height="450" rx="4"/>
                          <linearGradient x1="100%" y1="-12.816%" x2="0%" y2="-12.816%" id="hero-illustration-g">
                            <stop stopColor="#D2DAF0" stopOpacity="0" offset="0%"/>
                            <stop stopColor="#D2DAF0" offset="50.045%"/>
                            <stop stopColor="#D2DAF0" stopOpacity="0" offset="100%"/>
                          </linearGradient>
                          <linearGradient x1="116.514%" y1="-21.201%" x2="0%" y2="100%" id="hero-illustration-h">
                            <stop stopColor="#55EBD0" offset="0%"/>
                            <stop stopColor="#4950F6" offset="100%"/>
                          </linearGradient>
                          <path id="hero-illustration-j" d="M0 0h308v288H0z"/>
                          <filter x="-15.6%" y="-12.5%" width="139%" height="141.7%" filterUnits="objectBoundingBox" id="hero-illustration-i">
                            <feOffset dx="12" dy="24" in="SourceAlpha" result="shadowOffsetOuter1"/>
                            <feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                            <feColorMatrix values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0" in="shadowBlurOuter1"/>
                          </filter>
                          <circle id="hero-illustration-k" cx="16" cy="16" r="16"/>
                          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-illustration-m">
                            <stop stopColor="#C6FDF3" offset="0%"/>
                            <stop stopColor="#C6FDF3" stopOpacity="0" offset="100%"/>
                          </linearGradient>
                          <linearGradient x1="2.875%" y1="89.028%" x2="99.412%" y2="6.885%" id="hero-illustration-n">
                            <stop stopColor="#83F0DD" offset="0%"/>
                            <stop stopColor="#1ADAB7" offset="50.924%"/>
                            <stop stopColor="#55EBD0" offset="100%"/>
                          </linearGradient>
                          <linearGradient x1="50%" y1="1.569%" x2="50%" y2="97.315%" id="hero-illustration-o">
                            <stop stopColor="#FF97AA" offset="0%"/>
                            <stop stopColor="#FF6381" offset="100%"/>
                          </linearGradient>
                          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-illustration-p">
                            <stop stopColor="#FCAC96" offset="0%"/>
                            <stop stopColor="#FC8464" offset="100%"/>
                          </linearGradient>
                          <circle id="hero-illustration-r" cx="28" cy="28" r="28"/>
                          <filter x="-85.7%" y="-64.3%" width="314.3%" height="314.3%" filterUnits="objectBoundingBox" id="hero-illustration-q">
                            <feOffset dx="12" dy="24" in="SourceAlpha" result="shadowOffsetOuter1"/>
                            <feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                            <feColorMatrix values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0" in="shadowBlurOuter1"/>
                          </filter>
                          <circle id="hero-illustration-t" cx="36" cy="36" r="36"/>
                          <filter x="-66.7%" y="-50%" width="266.7%" height="266.7%" filterUnits="objectBoundingBox" id="hero-illustration-s">
                            <feOffset dx="12" dy="24" in="SourceAlpha" result="shadowOffsetOuter1"/>
                            <feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                            <feColorMatrix values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0" in="shadowBlurOuter1"/>
                          </filter>
                          <circle id="hero-illustration-v" cx="28" cy="28" r="28"/>
                          <filter x="-85.7%" y="-64.3%" width="314.3%" height="314.3%" filterUnits="objectBoundingBox" id="hero-illustration-u">
                            <feOffset dx="12" dy="24" in="SourceAlpha" result="shadowOffsetOuter1"/>
                            <feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                            <feColorMatrix values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0" in="shadowBlurOuter1"/>
                          </filter>
                          <circle id="hero-illustration-x" cx="24" cy="24" r="24"/>
                          <filter x="-100%" y="-75%" width="350%" height="350%" filterUnits="objectBoundingBox" id="hero-illustration-w">
                            <feOffset dx="12" dy="24" in="SourceAlpha" result="shadowOffsetOuter1"/>
                            <feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                            <feColorMatrix values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0" in="shadowBlurOuter1"/>
                          </filter>
                        </defs>
                        <g fill="none" fillRule="evenodd">
                          <Spring
                            from={{
                              offset: 5000,
                              width: 0,
                              strokeOpacity: 1,
                              fillOpacity:0
                            }}
                            to={{
                              offset: 0,
                              width: 2,
                              strokeOpacity: 0,
                              fillOpacity:1
                            }}
                            config={key => getHeroConfig[key]}
                          >{props => (
                            <path
                              strokeDasharray={5000}
                              strokeDashoffset={props.offset}
                              strokeWidth={props.width}
                              strokeOpacity={props.strokeOpacity}
                              fillOpacity={props.fillOpacity}
                              className="anime-element stroke-animation"
                              d="M600,300 C600,465.685425 465.685425,600 300,600 C134.314575,600 1.3749042e-14,465.685425 3.60373576e-15,300 C-6.54157051e-15,134.314575 134.314575,-1.29473326e-14 300,-2.30926389e-14 C465.685425,-3.32379452e-14 600,134.314575 600,300 Z"
                              fill="url(#hero-illustration-a)"
                              stroke="#DB6B7C"/>
                          )}
                          </Spring>
                          <g transform="translate(435 518)">
                            <Spring
                              from={{
                                transform: 'translateY(40px)',
                                opacity: 0
                              }}
                              to={{
                                transform: 'translateY(0px)',
                                opacity: 1
                              }}
                              delay={1600}
                              config={key => getCircleConfig[key]}
                            >{props => (
                              <circle className="anime-element fadeup-animation" style={props} fill="url(#hero-illustration-b)" cx="106" cy="32" r="32"/>
                            )}
                            </Spring>
                            <Spring
                              from={{
                                transform: 'translateY(40px)',
                                opacity: 0
                              }}
                              to={{
                                transform: 'translateY(0px)',
                                opacity: 1
                              }}
                              delay={1750}
                              config={key => getCircleConfig[key]}
                            >{props => (
                              <circle className="anime-element fadeup-animation" style={props} fill="url(#hero-illustration-c)" cx="12" cy="117" r="12"/>
                            )}
                            </Spring>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <Spring
                    from={{
                      opacity: 0,
                      transform: 'translateX(560px)',
                    }}
                    to={{
                      opacity: 1,
                      transform: 'translateX(0)'
                    }}
                    delay={1300}
                    config={key => getMockupConfig[key]}
                  >{props => (
                    <img className="device-mockup" style={props} src={require("../images/iphone-mockup.png")} alt="App preview"/>
                  )}
                  </Spring>
                </div>
            </div>
        </div>
      </section>

<section className="testimonials section">
  <div className="testimonials-shape testimonials-shape-1">
    <svg width="280" height="280" viewBox="0 0 280 280" >
        <defs>
            <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="testimonials-shape-1">
                <stop stopColor="#f9e6e9" offset="0%"/>
                <stop stopColor="#FEFBFB" offset="100%"/>
            </linearGradient>
        </defs>
        <circle cx="140" cy="685" r="140" transform="translate(0 -545)" fill="url(#testimonials-shape-1)" fillRule="evenodd"/>
    </svg>
  </div>
  <div className="testimonials-shape testimonials-shape-2">
    <svg width="125" height="107" viewBox="0 0 125 107" >
      <g fill="none" fillRule="evenodd">
        <circle fill="#C6FDF3" cx="48" cy="59" r="48"/>
        <path d="M58.536 39.713c0-6.884 1.72-14.007 5.163-21.368 3.443-7.36 8.167-13.458 14.173-18.292l11.645 7.91c-3.589 4.98-6.262 10.016-8.02 15.106S78.86 33.598 78.86 39.384v13.623H58.536V39.713z" fill="#55EBD0"/>
        <path d="M93.252 39.713c0-6.884 1.722-14.007 5.164-21.368 3.442-7.36 8.166-13.458 14.172-18.292l11.646 7.91c-3.589 4.98-6.262 10.016-8.02 15.106s-2.637 10.529-2.637 16.315v13.623H93.252V39.713z" fill="#1ADAB7"/>
      </g>
    </svg>
  </div>
  <div className="testimonials-shape testimonials-shape-3">
    <svg width="48" height="48" viewBox="0 0 48 48" mlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="93.05%" y1="19.767%" x2="15.034%" y2="85.765%" id="testimonials-shape-3">
          <stop stopColor="#FF3058" offset="0%"/>
          <stop stopColor="#FF6381" offset="100%"/>
        </linearGradient>
      </defs>
      <circle cx="24" cy="434" r="24" transform="translate(0 -410)" fill="url(#testimonials-shape-3)" fillRule="evenodd"/>
    </svg>
  </div>
  <div className="container">
    <div className="testimonials-inner section-inner">
      <h2 className="section-title mt-0 text-center">Testimonials</h2>
      <div className="testimonials-wrap">
      <Fade bottom>
        <div className="testimonial text-xs is-revealing">
          <div className="testimonial-inner">
            <div className="testimonial-main">
              <div className="testimonial-header">
                <img className="mb-16" src={require("../images/testimonial-06.png")} alt="Testimonial"/>
              </div>
              <div className="testimonial-body">
                <p className="mb-0">
                  I don&#8217;t worry about missing out on interesting events in my city any more.
                </p>
              </div>
            </div>
            <div className="testimonial-footer">
              <div className="testimonial-link">
                <span>Trowe</span>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="testimonial text-xs is-revealing">
          <div className="testimonial-inner">
            <div className="testimonial-main">
              <div className="testimonial-header">
                <img className="mb-16" src={require("../images/testimonial-07.png")} alt="Testimonial"/>
              </div>
              <div className="testimonial-body">
                <p className="mb-0">
                  I travel out of the country a fair amount. The "save offline" feature has been great for looking up my saved events wherever I&#8217;m headed.
                </p>
              </div>
            </div>
            <div className="testimonial-footer">
              <div className="testimonial-link">
                <span>Sagendaz</span>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="testimonial text-xs is-revealing">
          <div className="testimonial-inner">
            <div className="testimonial-main">
              <div className="testimonial-header">
                <img className="mb-16" src={require("../images/testimonial-05.png")} alt="Testimonial"/>
              </div>
              <div className="testimonial-body">
                <p className="mb-0">
                  The calendar integration is what I love the most. I wish every app made saving events so easy.</p>
              </div>
            </div>
            <div className="testimonial-footer">
              <div className="testimonial-link">
                <span>Arobinson</span>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      </div>
    </div>
  </div>
</section>

<section className="newsletter section text-light">
  <div className="container-sm">
    <div className="newsletter-inner section-inner">
      <div className="newsletter-header text-center">
        <h2 className="section-title mt-0">Join our waitlist</h2>
        <p className="section-paragraph">
          We&#8217;re in beta, but you can add your email below to get on the waitlist. We&#8217;re
          opening up the platform to new users every week.
        </p>
      </div>
      <form name="contact-bottom" method="POST" action="/thanks" netlify>
        <div className="footer-form newsletter-form field field-grouped">
          <div className="control control-expanded">
              <input className="input" type="email" name="email-bottom" placeholder="Your best email&hellip;"/>
          </div>
          <div className="control">
            <button className="button button-primary button-block button-shadow" type="submit">Early access</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>
</main>
</Layout>
)

export default IndexPage
