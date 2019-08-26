import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Tab extends Component {

  onClickTab = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {

    const { onClickTab, props: { activeTab, label } } = this;
    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <li className={className} onClick={onClickTab}>
        {label}
      </li>
    )
  }
}

Tab.contextTypes = {
  activeTab: PropTypes.any,
  label: PropTypes.any,
  onClick: PropTypes.func
}

export default Tab;
