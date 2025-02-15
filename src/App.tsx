import './App.css';
import {CacheProvider} from '@emotion/react';
import {ThemeProvider,} from '@mui/material';
import {BrowserRouter as Router} from 'react-router-dom';

import cacheRtl from './providers/cache/cache.ts';
import theme from './providers/theme/theme.ts';
import Main from './configs/routes';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './configs/react_query';

function App() {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={theme}>
                        <Router>
                            <Main/>
                        </Router>
                    </ThemeProvider>
                </CacheProvider>
            </QueryClientProvider>

        </>
    );
}

export default App;
