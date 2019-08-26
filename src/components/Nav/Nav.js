import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '@utils/scroll';

import './style.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false,
      active: '#landing-page'
    };
    this.nav = null;
  }

  handleScroll() {
    // const scrollPos = window.scrollY;
    const header = document.querySelectorAll('.page');
    header.forEach(function(el) {
    });

    if (window.pageYOffset > this.nav.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  scrollToPage(pageSelector) {
    this.setState({ active: pageSelector });
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const {
      theme: { color },
      switchTheme
    } = this.context;
    let moon = this.context.theme.name === 'night' ? 'show' : 'hide';
    let cloud = this.context.theme.name === 'day' ? 'show' : 'hide';


    const menuItems = [{
      name: 'Home',
      link: '#landing-page'
    },
    {
      name: 'About',
      link: '#about-page'
    },
    {
      name: 'Portfolio',
      link: '#portfolio-page'
    }];


    return (
      <nav style={{color: color}} ref={(elem) => {this.nav = elem;}}>
      <div className="magic-wand bounce-xy" onClick={(e) => switchTheme()}>
      <div className={`${moon}`}><span className="fas fa-moon fa-lg"/></div>
      <div className={`${cloud}`}><span className="fas fa-cloud fa-lg"/></div>

      <div className="magic-text">Touch Me</div>
      </div>
        <ul className="menu">
          {menuItems.map((item, i) =>
            <li className={"menu__item " + (this.state.active === item.link ? 'active' : '')} onClick={(e) => this.scrollToPage(item.link)} key={i}><span>{item.name}</span></li>
          )}
        </ul>
      </nav>
    )
  }

}

Nav.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Nav;
