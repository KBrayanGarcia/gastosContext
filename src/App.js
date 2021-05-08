import React, {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import RutaPrivada from './Components/Rutas/RutaPrivada';
import LoaderPage from './Components/utils/LoaderPage/LoaderPage';
import PresupuestoState from './Context/Presupuesto/PresupuestoState';
const GastosLayout = lazy(() => import('./Components/Gastos/GastosLayout'))
const PresupuestoLayout = lazy(() => import('./Components/Presupuesto/PresupuestoLayout'))

function App() {
    return (
        <>
            <PresupuestoState>
                <Router>
                    <Suspense fallback={<LoaderPage/>}>
                        <Switch>
                            <Route
                                exact path="/"
                                component={PresupuestoLayout}
                            />
                            <RutaPrivada
                                exact path="/gastos"
                                component={GastosLayout}
                            />
                        </Switch>
                    </Suspense>
                </Router>
            </PresupuestoState>
        </>
    );
}

export default App;
