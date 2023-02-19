import { FC } from "react";
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';

import createEmotionCache from '@/src/utility/createEmotionCache';

import '@/src/styles/globals.css';
import LayoutDefault from "../components/layouts/LayoutDefault";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();


const MyApp: FC <MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <LayoutDefault>
        <CssBaseline />
        <Component {...pageProps} />
      </LayoutDefault>
    </CacheProvider>
  );
};

export default MyApp;