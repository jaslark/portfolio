import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import Tabs from '@components/Tabs';
import PortfolioItem from '@components/PortfolioItem';
import portfolioItems from './portfolio-items-data';

import './style.scss';

const PortfolioPage = (props, context) => {
  const {
    theme: { name, color, background }
  } = context;

  return (
    <div className="page" id="portfolio-page" style={{ background: background }}>
      <div className="content-grid" style={{color: color}}>
        <h1>Portfolio</h1>

          <Tabs>
            <div label="All">
              <div className="portfolio-wrapper">
                {portfolioItems[0].first.map((item, i) => (
                  <PortfolioItem render={item} key={i} />
                ))}
              </div>
            </div>
            <div label="Node.js">
              <div className="portfolio-wrapper">
                {portfolioItems[1].second.map((item, i) => (
                  <PortfolioItem render={item} key={i} />
                ))}
              </div>
            </div>
            <div label="Angular">
              <div className="portfolio-wrapper">
                {portfolioItems[2].third.map((item, i) => (
                  <PortfolioItem render={item} key={i} />
                ))}
              </div>
            </div>
          </Tabs>

      </div>
    </div>

  );
};

PortfolioPage.contextTypes = {
  theme: PropTypes.any
};

export default PortfolioPage;
