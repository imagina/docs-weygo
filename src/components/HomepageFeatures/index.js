import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';
import Translate from "@docusaurus/Translate";

const FeatureList = [
  {
    title: 'Laravel',
    imgUrl: '/svgLogo/laravel.svg'
  },
  {
    title: 'VueJs',
    imgUrl: '/svgLogo/vuejs.svg'
  },
  {
    title: 'Node',
    imgUrl: '/svgLogo/node.svg'
  },
  {
    title: 'n8n',
    imgUrl: '/svgLogo/n8n.svg'
  }
];

function Feature({imgUrl, title}) {
  return (
    <div className={`${clsx('col col--4')} ${styles.boxFeature}`}>
      <div className="text--center padding-horiz--md">
        <img src={useBaseUrl(imgUrl)} />
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
