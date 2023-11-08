import {useContext} from 'react';

import {ThemeContext, Theme} from './ThemeProvider';

const useTheme = (): Theme => useContext(ThemeContext) as Theme;

export default useTheme;
