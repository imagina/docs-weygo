import React from 'react';
import Link from '@docusaurus/Link';
import './index.css';

const boxHero = [
  {
    title: 'VueJs',
    description: 'Kickstart Your Project with Base Quasar',
    linkTo: '/docs/VueJs/intro'
  },
  {
    title: 'Laravel',
    description: 'Delve into Laravel Submodules Today',
    linkTo: '/docs/Laravel/tutorial'
  },
  {
    title: 'API',
    description: 'Maximize your potential with Laravel\'s API.',
    linkTo: '/docs/Laravel/API/modules'
  }
]

function Box({title, description, linkTo}) {
  return (
    <div className="box">
      <div className="text">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <span className="more">Read More</span>
      </div>
      <Link to={linkTo} className="link">
        Read More
      </Link>
    </div>
  );
}

function Hero() {
  return (<div className="boxes">

      {boxHero.map((props, idx) => (
        <Box key={idx} {...props} />
      ))}

    </div>
  );
}

export default Hero;