import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './style.scss';

class BarSkill extends Component {

  render() {

    const menuItems = [{
      name: 'CSS',
      width: '80%'
    },
    {
      name: 'HTML',
      width: '90%'
    },
    {
      name: 'React',
      width: '70%'
    },
    {
      name: 'Javascript',
      width: '80%'
    },
    {
      name: 'Angular',
      width: '70%'
    },
    {
      name: 'Node,js',
      width: '40%'
    },
    {
      name: 'Photoshop',
      width: '60%'
    }
    ];


    return (
      <div>
          { menuItems.map((item, i) =>
            <div className="bar flex" key={i}>
              <div className="bar fill" style={{width: item.width}}>
                <div className="tag bold flex">{item.name}</div>
              </div>
              <span>{item.width}</span>
            </div>
          )}
        </div>
    )
  }

}


export default BarSkill;
