import React, {lazy, Suspense, useContext, useEffect, useState}from 'react';
import { Popover, ArrowContainer  } from 'react-tiny-popover'


import {Querys} from '../utils/Querys';
import './Gastos.css';
import LoaderElement from '../utils/LoaderElement/LoaderElement'

import PresupuestoContext from '../../Context/Presupuesto/PresupuestoContext';
const Sidebar = lazy(() => import('./Sidebar'))
const FormGastos = lazy(() => import('./FormGastos'))
const ResumenGastos = lazy(() => import('./ResumenGastos'))


const GastosLayout = () => {

    const { presupuestoRestante,presupuestoInicial,  obtenerPresupuesto, eliminarPresupuesto } = useContext(PresupuestoContext);

    const queryLaptop = Querys('(min-width: 768px)');

    const [isPopoverOpen, setIsPopoverOpen] = useState(false)

    useEffect(() => {
        obtenerPresupuesto()
    // eslint-disable-next-line
    }, [])


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
                                    <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                                        <h5 className="mb-0">Inicial: { presupuestoInicial } </h5>
                                            <Popover
                                                onClickOutside={() => setIsPopoverOpen(false)}
                                                isOpen={isPopoverOpen}
                                                positions={queryLaptop ? ['right'] : ['bottom']} 
                                                content={ ({ position, childRect, popoverRect }) => (
                                                    <ArrowContainer 
                                                        position={position}
                                                        childRect={ {
                                                            top: childRect.top,
                                                            bottom: childRect.bottom,
                                                            left: childRect.left,
                                                            right: childRect.right,
                                                            width: childRect.width,
                                                            height: childRect.height
                                                        }}
                                                        popoverRect={popoverRect}
                                                        arrowColor={'green'}
                                                        arrowSize={10}
                                                        arrowStyle={ {
                                                            borderRight: '11px solid var(--success)'
                                                        }}
                                                        className='popover-arrow-container'
                                                        arrowClassName='popover-arrow border-success'
                                                    >
                                                        <div className="p-2 bg-success">
                                                            <div className="btn btn-sm btn-danger mr-2"
                                                                onClick={ () => {
                                                                    setIsPopoverOpen(!isPopoverOpen)
                                                                    eliminarPresupuesto()
                                                                }}
                                                            >
                                                                Confirmar
                                                            </div>
                                                            <div className="btn btn-sm btn-secondary"
                                                                onClick={ () => setIsPopoverOpen(!isPopoverOpen)}
                                                            >Cancelar</div>
                                                        </div>
                                                    </ArrowContainer>
                                                )}
                                            >
                                            <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                                                <i className="fas fa-trash text-danger ml-2"></i>
                                            </div>
                                        </Popover>
                                    </div>
                                    <h5 className="mb-0">Restante: { presupuestoRestante }</h5>
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