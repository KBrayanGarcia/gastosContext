import React, {useReducer, useContext} from 'react'

import GastosReducer from './GastosReducer';
import GastosContext from './GastosContext';
import PresupuestoContext from '../Presupuesto/PresupuestoContext';

import {
    AGREGAR_GASTO,
    CANCELAR_REINICIO_FORM_GASTOS,
    ELIMINAR_GASTOS,
    ELIMINAR_GASTO,
    ACTIVAR_EDICION_GASTO,
    CANCELAR_EDICION_GASTO,
    EDITAR_GASTO
} from './TypesGastos';

const GastosState = (props) => {

    const { presupuestoRestante, restarPresupuesto, sumarPresupuestoGastoBorrado } = useContext(PresupuestoContext);

    const initialState = {
        gastos: JSON.parse(localStorage.getItem('gastos')) || [],
        reiniciarformfastos: false,
        gasto_a_editar: {},
        estado_edicion: false
    }
    
    const [state, dispatch] = useReducer(GastosReducer, initialState);

    const agregarGasto = gasto => {
        dispatch({
            type: AGREGAR_GASTO,
            payload: gasto
        })

        let nuevoPresupuesto = presupuestoRestante;

        nuevoPresupuesto -= Number(gasto.cantidad);

        restarPresupuesto(nuevoPresupuesto)

    }

    const cancelarReinicioFormGastos = () => {
        dispatch({
            type: CANCELAR_REINICIO_FORM_GASTOS
        })
    }
    
    const eliminarGastos = () => {
        dispatch({
            type: ELIMINAR_GASTOS
        })
    }

    const eliminarGasto = (idGasto, cantidad) => {

        const { gastos } = state;

        const nuevosGastos = gastos.filter(gasto => gasto.id !== idGasto);
        dispatch({
            type: ELIMINAR_GASTO,
            payload: nuevosGastos
        })
        sumarPresupuestoGastoBorrado(cantidad)
    }

    const activarEdicionGasto = gasto => {
        dispatch({
            type: ACTIVAR_EDICION_GASTO,
            payload: gasto
        })
    }
    const cancelarEdicionGasto = () => {
        dispatch({
            type: CANCELAR_EDICION_GASTO,
        })
    }

    const actualizarGastos = gasto_editado => {
        let nuevosGastos = state.gastos.slice();
        nuevosGastos.forEach((gasto, index) => {
            if (gasto.id === gasto_editado.id) {
                nuevosGastos[index] = gasto_editado;
            }
        })

        dispatch({
            type: EDITAR_GASTO,
            payload: nuevosGastos
        })
    }

    return (
        <GastosContext.Provider
            value={ {
                /* Variables */
                gastos: state.gastos,
                reiniciarformfastos: state.reiniciarformfastos,
                estado_edicion: state.estado_edicion,
                gasto_a_editar: state.gasto_a_editar,

                /* Funciones */
                agregarGasto,
                cancelarReinicioFormGastos,
                eliminarGastos,
                eliminarGasto,
                activarEdicionGasto,
                cancelarEdicionGasto,
                actualizarGastos
            }}
        >

            {props.children}
            
        </GastosContext.Provider>
    )
}

export default GastosState
