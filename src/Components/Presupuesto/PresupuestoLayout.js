import React from 'react';


import PresupuestoForm from './PresupuestoForm';
import './Presupuesto.css';

const PresupuestoLayout = () => {

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 fondo-presupuesto container-fluid">
            <PresupuestoForm/>
        </div>
    );

}

export default PresupuestoLayout;