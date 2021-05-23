import React, {useState, useContext, useEffect, useRef} from 'react';
import NumberFormat from 'react-number-format';

import {alerta} from '../../Herramientas'
import GastosContext from '../../Context/Gastos/GastosContext';

const FormGastos = () => {

    const cantidadRef = useRef();
    const { agregarGasto, reiniciarformfastos, cancelarReinicioFormGastos } = useContext(GastosContext);

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

    const validarGasto = e => {
        e.preventDefault();

        if (cantidad <= 0 || descripcion.trim() === '') {
            return alerta('Todos los campos son obligatorios, la cantidad debe de ser mayor a 0', 'danger');
        }
        const gasto = {
            cantidad,
            descripcion
        }

        agregarGasto(gasto)

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
                    <button className="btn btn-gastos-principal btn-block">Registrar</button>
                </div>
            </form>
        </div>
    )
}

export default FormGastos
