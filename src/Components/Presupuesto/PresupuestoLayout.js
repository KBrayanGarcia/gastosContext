import React, {lazy, Suspense} from 'react';


import './Presupuesto.css';
import LoaderELement from '../utils/LoaderElement/LoaderElement';
const PresupuestoForm = lazy(() => import('./PresupuestoForm'));

const PresupuestoLayout = () => {

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 fondo-presupuesto container-fluid">
            <Suspense fallback={<LoaderELement/>}>
                <PresupuestoForm/>
            </Suspense>
        </div>
    );

}

export default PresupuestoLayout;