import { getState, dispatch } from '@redux/store';
import { setTheme } from '@src/redux/config';
import { storageService } from './StorageService';

class ThemeService {
  private themes = {
    light: {
      backgroundColor: '#fff',
      backgroundSecondaryColor: '#f6f6f8',
      fontColor: '#000'
    },
    dark: {
      backgroundColor: '#1c1c21',
      backgroundSecondaryColor: '#2d2d2e',
      fontColor: '#fff'
    }
  };

  private vars = {
    backgroundColor: undefined,
    backgroundSecondaryColor: undefined,
    fontColor: undefined
  };

  init(theme?: string) {
    const selectedTheme = theme || storageService.get('theme');
    Object.assign(this.vars, selectedTheme ? this.themes[selectedTheme] : this.themes.light);
    for (let key in this.vars) {
      this.setVariable(key, this.vars[key]);
    }

    dispatch(setTheme(selectedTheme));
  }

  toggleTheme() {
    const activeTheme = getState().config.theme;
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';
    this.init(newTheme);
    storageService.set('theme', newTheme);
  }

  private setVariable(key: string, value: string) {
    document.documentElement.style.setProperty(`--${key}`, value);
  }
}

export const themeService = new ThemeService();
