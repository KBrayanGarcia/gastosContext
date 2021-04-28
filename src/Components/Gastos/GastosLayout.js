import React from 'react';


import FormGastos from './FormGastos';
import ResumenGastos from './ResumenGastos';
import Sidebar from './Sidebar';
import './Gastos.css';


const GastosLayout = () => {

    return (
        <div className="layout-gastos py-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 d-none d-md-block">
                        <Sidebar/>
                    </div>
                    <div className="col-md-10">
                        <div>
                            <div className="container-md-fluid">
                                <div className="cantidad-presupuesto p-3">
                                    <h5 className="mb-0">Restante: $5000</h5> 
                                </div>
                                <div className="app-resumen-gastos">
                                    <FormGastos/>
                                    <ResumenGastos/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default GastosLayout;