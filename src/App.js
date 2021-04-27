import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import GastosLayout from './Components/Gastos/GastosLayout';
import PresupuestoLayout from './Components/Presupuesto/PresupuestoLayout';

function App() {
    return (
        <>
            <Router>
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
            </Router>
        </>
    );
}

export default App;
