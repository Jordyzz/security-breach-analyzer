import React from 'react';
import { Router } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

import history from '@core/history';
import MainPage from '@pages/MainPage';
import styles from './App.scss';
import ToastHandler from '@components/ToastHandler';
import Button from '@components/Button';
import Icon from '@components/Icon';
import { themeService } from '@core/ThemeService';
import { useSelector } from '@src/redux/useSelector';

function App() {
  const { theme } = useSelector(state => state.config);

  return (
    <Router history={history}>
      <div className={styles.wrapper}>
        <div className={styles.toolbar}>
          <Button onClick={() => themeService.toggleTheme()} className={styles.themeBtn}>
            <Icon type={theme !== 'light' ? 'sun' : 'moon'} className={styles.icon} />
          </Button>
        </div>
        <ToastHandler />
        <div className={styles.content}>
          <Switch>
            <Route path="/home" component={MainPage} />
            <Route path="/home/:id" component={MainPage} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
