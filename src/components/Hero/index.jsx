import React from 'react';
import Link from '@docusaurus/Link';
import './index.css';

const boxHero = [
  {
    title: 'Introduction',
    description: 'Dive into our API and acquire fundamental knowledge about it.',
    linkTo: '/docs/Laravel/API/modules'
  },
  {
    title: 'Modules',
    description: 'Unlock the full potential of our modules through exploration.',
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