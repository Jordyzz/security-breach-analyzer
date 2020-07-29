import React, { useMemo } from 'react';

import styles from './MainPage.scss';
import { useSelector } from '@redux/useSelector';
import BreachCollapse from '@components/BreachCollapse';
import { breachService } from '@core/BreachService';
import Button from '@components/Button';
import history from '@core/history';
import { useParams, useLocation } from 'react-router';

function MainPage() {
  const location = useLocation();
  const { items, hasNext } = useSelector(state => state.breaches);

  const setSelectedBreach = name => {
    if (history.location.pathname.includes(name)) {
      history.push('/home');
      return;
    }

    history.push(`/home/${name}`);
  };

  const selectedBreach = useMemo(() => location.pathname.replace('/home/', ''), [location]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {items.map(b => (
          <BreachCollapse
            key={b.name}
            breach={b}
            onSelectedClick={() => setSelectedBreach(b.name)}
            isSelected={selectedBreach === b.name}
          />
        ))}
      </div>
      {hasNext && items && (
        <Button className={styles.loadButton} onClick={() => breachService.getBreaches()}>
          Load more...
        </Button>
      )}
    </div>
  );
}

export default MainPage;
