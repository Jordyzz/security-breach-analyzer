import React, { useState } from 'react';
import classNames from 'classnames';

import Icon from '@components/Icon';
import styles from './BreachCollapse.scss';
import { BreachCollapseProps } from './BreachCollapse.interface';
import TagContainer from './TagContainer';

const BreachCollapse = ({ breach, onSelectedClick, isSelected = false }: BreachCollapseProps) => {
  console.log(isSelected);
  return (
    <div className={classNames(styles.container, isSelected && styles.open)}>
      <div className={styles.header} onClick={() => onSelectedClick()}>
        <div className={styles.logo} style={{ backgroundImage: `url(${breach.logo})` }}></div>
        <p className={styles.titleText}>{breach.title}</p>
        <div className={styles.date}>{`Breach date: ${breach.breachDate}`}</div>
        <Icon type="downCaret" className={`${isSelected ? styles.flipped : styles.downCaret}`} />
      </div>
      <div className={classNames(styles.content, isSelected && styles.contentOpen)}>
        <div dangerouslySetInnerHTML={{ __html: breach.description }} />
        <TagContainer tags={breach.tags} />
      </div>
    </div>
  );
};

export default BreachCollapse;
