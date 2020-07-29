import React from 'react';
import classNames from 'classnames';

import styles from './TagContainer.scss';
import { TagContainerProps } from './TagContainer.interface';

const TagContainer = (props: TagContainerProps) => {
  const { tags } = props;
  return (
    <div className={styles.container}>
      {tags &&
        tags.map(tag => (
          <div key={tag} title={tag} className={classNames(styles.tag, 'ellipsis-overflow')}>
            {tag}
          </div>
        ))}
    </div>
  );
};

export default TagContainer;
