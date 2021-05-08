import React, {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoaderPage from './Components/utils/LoaderPage/LoaderPage';
const GastosLayout = lazy(() => import('./Components/Gastos/GastosLayout'))
const PresupuestoLayout = lazy(() => import('./Components/Presupuesto/PresupuestoLayout'))

function App() {
    return (
        <>
            <Router>
                <Suspense fallback={<LoaderPage/>}>
                    <Switch>
                        <Route
                            exact path="/"
                            component={PresupuestoLayout}
                        />
                        <Route
                            exact path="/gastos"
                            component={GastosLayout}
                        />
                    </Switch>
                </Suspense>
            </Router>
        </>
    );
}

export default App;
