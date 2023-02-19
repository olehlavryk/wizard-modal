import { ThemeOptions } from '@mui/material/styles';
import commonOptions from './themeOptions';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    // primary: {
    //   main: '#fff',
    // }
  },
  ...commonOptions
};

export default lightThemeOptions;