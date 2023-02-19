import { ThemeOptions } from '@mui/material/styles';
import commonOptions from './themeOptions';

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    // primary: {
    //   main: '#000',
    // }
  },
  ...commonOptions
};

export default darkThemeOptions;