import React, {lazy, Suspense}from 'react';


import {Querys} from '../utils/Querys';
import './Gastos.css';
import LoaderElement from '../utils/LoaderElement/LoaderElement'

const Sidebar = lazy(() => import('./Sidebar'))
const FormGastos = lazy(() => import('./FormGastos'))
const ResumenGastos = lazy(() => import('./ResumenGastos'))


const GastosLayout = () => {

    const queryLaptop = Querys('(min-width: 768px)');


    return (
        <div className="layout-gastos py-2 py-md-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 d-none d-md-block sidebar-col min-vh-100">
                        <Suspense fallback={ <LoaderElement/> }>
                            <Sidebar/>
                        </Suspense>
                    </div>
                    <div className="col-md-10 presupuesto-col ">
                        <div>
                            <div className="container-md-fluid">
                                <div className="cantidad-presupuesto p-3 text-center text-md-left">
                                    <h5 className="mb-0">Restante: $5000</h5> 
                                </div>
                                <div className="app-resumen-gastos row">
                                    <div className="mt-2 col-md-6">
                                        <button type="button" className="btn btn-block btn-gastos-principal d-md-none" data-toggle="modal" data-target="#exampleModal">
                                            Ingresar
                                        </button>
                                        <div className={queryLaptop ? 'd-block' : 'modal fade'} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered my-0">
                                                <div className="modal-content modal-form-gastos">
                                                    <div className="modal-body">
                                                        <Suspense fallback={ <LoaderElement /> }>
                                                            <FormGastos/>
                                                            
                                                        </Suspense>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <Suspense fallback={ <LoaderElement /> }>
                                            <ResumenGastos/>
                                        </Suspense>
                                    </div>
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