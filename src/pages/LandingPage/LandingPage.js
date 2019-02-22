import React from 'react';
import PropTypes from 'prop-types';
import Nav from '@components/Nav';
import ScrollToNext from '@components/ScrollToNext';
import ProfileCV from '../../images/CV_LENGUYENNHATTRUNG.pdf';

import './style.scss';


const LandingPage = (props, context) => {
  const { theme: { name, color, background } } = context;


  return (
    <div  className="page" id="landing-page" style={{ background: background }}>
    <Nav />
    <main style={{color: color}}>
      <div className="intro-wrapper">
        <div className="intro-name">HELLO, HOW'S IT GOING?</div>
        <div className="intro-text" style={{color: color}}>
            Le Nguyen Nhat Trung | Front End Developer
        </div>
        <style jsx="true">
          {`
            .page-link {
              color: ${color};
              border: 2px solid ${color};
            }
          `}
        </style>
        <a target="_blank" className="button page-link" href={ProfileCV}>Download Resume</a>
      </div>
      </main>
      <ScrollToNext pageSelector="#about-page" />
    </div>
  )
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
