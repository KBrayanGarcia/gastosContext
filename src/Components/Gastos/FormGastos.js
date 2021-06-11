import React, {useState, useContext, useEffect, useRef} from 'react';
import NumberFormat from 'react-number-format';

import {alerta} from '../../Herramientas'
import GastosContext from '../../Context/Gastos/GastosContext';
import PresupuestoContext from '../../Context/Presupuesto/PresupuestoContext';

const FormGastos = () => {

    const cantidadRef = useRef();
    const {
        estado_edicion,
        gasto_a_editar,
        agregarGasto,
        reiniciarformfastos,
        cancelarReinicioFormGastos,
        cancelarEdicionGasto,
        actualizarGastos
    } = useContext(GastosContext);
    const {
        presupuestoRestante,
        actualizarRestante
    } = useContext(PresupuestoContext);

    const [cantidad, actualizarCantidad] = useState(0);
    const [descripcion, actualizarDescripcion] = useState('');

    useEffect(() => {
        if (reiniciarformfastos) {
            actualizarCantidad(0);
            actualizarDescripcion('');
            cancelarReinicioFormGastos();
            cantidadRef.current.focus();
        }
    // eslint-disable-next-line
    }, [reiniciarformfastos])

    useEffect(() => {
        if (estado_edicion) {
            actualizarDescripcion(gasto_a_editar.descripcion)
            actualizarCantidad(gasto_a_editar.cantidad)
            cantidadRef.current.focus();
        }
    // eslint-disable-next-line
    }, [estado_edicion])

    const validarGasto = async e => {
        e.preventDefault();

        if (cantidad <= 0 || descripcion.trim() === '') {
            return alerta('Todos los campos son obligatorios, la cantidad debe de ser mayor a 0', 'danger');
        }
        const gasto = {
            cantidad,
            descripcion
        }

        if (estado_edicion) {
            gasto.id = gasto_a_editar.id;
            let presupuestoNuevo = presupuestoRestante;
            presupuestoNuevo += gasto_a_editar.cantidad;

            presupuestoNuevo -= gasto.cantidad;
            await actualizarGastos(gasto)
            actualizarRestante(presupuestoNuevo)
        } else {
            gasto.id = Date.now();
            agregarGasto(gasto)
            
        }



    }

    return (
        <div className="form-gastos shadow-lg">
            <form onSubmit={validarGasto}>
                <label htmlFor="cantidad" className="text-muted">Cantidad</label>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">$</span>
                    </div>
                    {/* <input
                        type="number"
                        className="form-control input-app-gastos"
                        id="cantidad"
                        value={cantidad}
                        name="cantidad"
                        onChange={e => actualizarCantidad(Number(e.target.value))}
                    /> */}
                    <NumberFormat
                        getInputRef={cantidadRef}
                        className="form-control input-app-gastos"
                        value={ cantidad }
                        id="cantidad"
                        thousandSeparator={ true }
                        onValueChange={({value}) => actualizarCantidad(Number(value))}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcionGasto" className="text-muted">Descripción</label>
                    <input
                        type="text"
                        className="form-control input-app-gastos"
                        id="descripcionGasto"
                        
                        value={descripcion}
                        name="descripcion"
                        onChange={e => actualizarDescripcion(e.target.value)}
                    />
                </div>
                <div>
                    { estado_edicion
                        ?
                            <>
                                <button className="btn btn-gastos-principal btn-block">Actualizar</button>
                                <button className="btn btn-secondary btn-block" onClick={() => cancelarEdicionGasto()}>Cancelar</button>
                            </>
                        :
                            <button className="btn btn-gastos-principal btn-block">Registrar</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default FormGastos
