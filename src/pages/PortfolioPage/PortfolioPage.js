import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import Tabs from '@components/Tabs';

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
              See ya later, <em>Alligator</em>!
            </div>
            <div label="Node.js">
              After &apos;while, <em>Crocodile</em>!
            </div>
            <div label="Angular">
              Nothing to see here, this tab is <em>extinct</em>!
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
