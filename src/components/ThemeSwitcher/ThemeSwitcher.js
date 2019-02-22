import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getThemes } from './themes';

class ThemeSwitcher extends Component {

  constructor(props) {
    super(props);
    const allThemes = getThemes();
    const firstTimeThemes = allThemes;


    this.state = {
      theme: firstTimeThemes[0]
    }

    this.switchTheme = this.switchTheme.bind(this);
  }

  getChildContext() {
    return {
      theme: this.state.theme,
      switchTheme: this.switchTheme
    };
  }

  getRandomTheme = () => {
    const currentTheme = this.state.theme;
    const allThemes = getThemes();
    const themesWithoutCurrentTheme = allThemes;

    if (currentTheme.name == 'night') {
      return themesWithoutCurrentTheme[1];
    } else {
      return themesWithoutCurrentTheme[0];      
    }
  }

  switchTheme = () => {
    const randomTheme = this.getRandomTheme();
    this.setState({
      theme: randomTheme
    });
  }

  render() {
    const { children } = this.props;
    const theme = this.state.theme;

    return (
      <div className="theme-switcher">
        { children}
      </div>
    );
  }
}

ThemeSwitcher.propTypes = {
  children: PropTypes.node
}

ThemeSwitcher.childContextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
}


export default ThemeSwitcher;
