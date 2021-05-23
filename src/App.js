import React, {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PresupuestoState from './Context/Presupuesto/PresupuestoState';
import GastosState from './Context/Gastos/GastosState';

import RutaPrivadaGastos from './Components/Rutas/RutaPrivada';
import RutaPrivadaPresupuesto from './Components/Rutas/RutaPrivadaPresupuesto';
import LoaderPage from './Components/utils/LoaderPage/LoaderPage';
const GastosLayout = lazy(() => import('./Components/Gastos/GastosLayout'))
const PresupuestoLayout = lazy(() => import('./Components/Presupuesto/PresupuestoLayout'))

function App() {
    return (
        <>
            <PresupuestoState>
                <GastosState>
                    <Router>
                        <Suspense fallback={<LoaderPage/>}>
                            <Switch>
                                <RutaPrivadaPresupuesto
                                    exact path="/"
                                    component={PresupuestoLayout}
                                />
                                <RutaPrivadaGastos
                                    exact path="/gastos"
                                    component={GastosLayout}
                                />
                            </Switch>
                        </Suspense>
                    </Router>
                </GastosState>
            </PresupuestoState>
        </>
    );
}

export default App;
