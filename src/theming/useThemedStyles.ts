import {Theme} from './ThemeProvider';
import useTheme from './useTheme';

type ThemedStyles = Record<
  string,
  {
    [key: string]: string | number;
  }
>;

const useThemedStyles = (styles: (theme: Theme) => ThemedStyles) => {
  const theme = useTheme();
  const themedStyles = styles(theme);

  return themedStyles;
};

export default useThemedStyles;
