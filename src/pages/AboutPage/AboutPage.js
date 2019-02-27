import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import BarSkill from '@components/BarSkill';
import ProfilePic from '../../images/avatar_1.jpg';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { name, color, background }
  } = context;

  return (
    <div className="page" id="about-page" style={{ background: background }}>
      <div className="content-grid" style={{color: color}}>
        <h1>About</h1>

          <div className="skills-wrapper flex row-gt-sm">
                  <div className="flex flex-50-gt-sm waypoint animated slide-in-left text-center" data-animation="slide-in-left">
                    <img src={ProfilePic} className="avatar"/>
                    <div className="text-intro">
                      I'm the Front-End Developer for EyeCue Lab in Portland, OR.
                      <br/>
                      I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                      <br/>
                      <span className="page-links highlight" dest="contact">Let's make something special.</span>
                    </div>
                  </div>

                  <div className="flex flex-50-gt-sm waypoint bars-wrap animated slide-in-right" data-animation="slide-in-right">
                  <BarSkill />
                  </div>
                </div>


      </div>
      <ScrollToNext pageSelector="#portfolio-page" />
    </div>

  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
