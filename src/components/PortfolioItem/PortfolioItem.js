import React from 'react';
import PropTypes from 'prop-types';
import './style';

const PortfolioItem = (props, context) => {
  const { theme: { background, color } } = context;

  const data = props.render;
  console.log(props);
    return (
      <div className="portfolio-item">
        <div className="portfolio-item__title">{data.title}</div>

        <div className="portfolio-item__desc">
          {data.desc}
        </div>
        <div className="portfolio-item__links">
          <a src="#">Code</a>
          <a target="_blank" href={data.link}>More</a>
        </div>
      </div>
    );
};

PortfolioItem.contextTypes = {
  theme: PropTypes.any
};

export default PortfolioItem;
