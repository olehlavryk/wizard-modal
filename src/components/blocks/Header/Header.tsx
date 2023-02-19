import React, {Dispatch, FC, SetStateAction} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';

interface IHeaderProps {
  isDarkTheme: boolean,
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>,
	className?: string
}

const Header:FC<IHeaderProps> = ({isDarkTheme, setIsDarkTheme, className}) => {
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Switch checked={isDarkTheme} onChange={changeTheme} />} label="Dark theme" />
            </FormGroup>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  )
};

Header.displayName = 'Header'

export default Header;
