import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';


function Stack({imgUrl, title}) {
  return (
    <div className={`${clsx('col col--4')} ${styles.boxFeature}`}>
      <div className="text--center padding-horiz--md">
        <img src={useBaseUrl(imgUrl)} />
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function BoxStack(props) {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row}>
          {props.stack.map((props, idx) => (
            <Stack key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
