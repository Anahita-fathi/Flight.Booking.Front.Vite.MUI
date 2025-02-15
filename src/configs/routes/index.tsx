// Main.tsx
import {Suspense, memo, Fragment} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Stack} from '@mui/material';
import {routes as defaultRoutes} from '../routes/default'; // adjust the path as needed
//import FallbackComponent from 'views/common/components/fallback_component/route';

/*const NotFound = lazy(() => <> </>);*/

const Main = () => {
    return (
        <Suspense fallback={<div>FallbackComponent</div>}>
            <Stack spacing={1} sx={{width: '100%', height: '100%'}}>
                <Routes>
                    {Object.values(defaultRoutes).map((group: any, groupIndex: number) => (
                        <Fragment key={`group_${groupIndex}`}>
                            {Object.values(group).map((route: any, routeIndex: number) => (
                                <Route
                                    key={`route_${routeIndex}`}
                                    path={`${route?.path}${route?.params || ''}`}
                                    element={route.element}
                                />
                            ))}
                        </Fragment>
                    ))}
                    {/*          <Route path="*" element={<NotFound/>}/>*/}
                </Routes>
            </Stack>
        </Suspense>
    );
};

export default memo(Main);
