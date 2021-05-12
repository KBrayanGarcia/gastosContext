import React, {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import RutaPrivadaGastos from './Components/Rutas/RutaPrivada';
import RutaPrivadaPresupuesto from './Components/Rutas/RutaPrivadaPresupuesto';
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
            </PresupuestoState>
        </>
    );
}

export default App;
