import {FC, ReactNode, useState} from 'react'

import Header from '@/src/components/blocks/Header'
import lightThemeOptions from '@/src/theme/lightThemeOptions';
import darkThemeOptions from '@/src/theme/darkThemeOptions';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

interface ILayoutDefaultProps {
	className?: string,
  children: ReactNode
}

const LayoutDefault: FC<ILayoutDefaultProps> = ({
	className,
	children,
}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const theme = isDarkTheme ? createTheme(darkThemeOptions) : createTheme(lightThemeOptions);

	return (
		<ThemeProvider theme={theme}>
			<div className={className}>
				<Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
				<main>
					{children}
				</main>
				<div id="portals"></div>
			</div>
		</ThemeProvider>

  )
}

LayoutDefault.displayName = 'LayoutDefault'

export default LayoutDefault
