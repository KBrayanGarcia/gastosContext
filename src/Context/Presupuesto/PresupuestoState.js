import React, {useReducer} from 'react'
import PresupuestoContext from './PresupuestoContext';
import PresupuestoReducer from './PresupuestoReducer';

import {
    ESTABLECER_PRESUPUESTO,
    OBTENER_PRESUPUESTO,
    ELIMINAR_PRESUPUESTO,
    RESTAR_PRESUPUESTO,
    SUMAR_PRESUPUESTO_GASTO_BORRADO,
    ACTUALIZAR_RESTANTE
} from './TypesPresupuesto';

const PresupuestoState = (props) => {

    const initialState = {
        presupuestoInicial: 0,
        presupuestoRestante: 0,
        PresupuestoExiste: false,
        cargando: true
    }

    const [state, dispatch] = useReducer(PresupuestoReducer, initialState);

    const establecerPresupuesto = cantidad => {
        dispatch({
            type: ESTABLECER_PRESUPUESTO,
            payload: cantidad
        })
    }

    const obtenerPresupuesto = () => {
        dispatch({
            type: OBTENER_PRESUPUESTO
        })
    }

    const eliminarPresupuesto = () => {
        dispatch({
            type: ELIMINAR_PRESUPUESTO
        })
    }

    const restarPresupuesto = nuevoPresupuesto => {
        dispatch({
            type: RESTAR_PRESUPUESTO,
            payload:nuevoPresupuesto
        })
    }

    const sumarPresupuestoGastoBorrado = cantidad => {
        let nuevoPresupuesto = state.presupuestoRestante;
        nuevoPresupuesto += cantidad;

        dispatch({
            type: SUMAR_PRESUPUESTO_GASTO_BORRADO,
            payload: nuevoPresupuesto
        })
    }

    const actualizarRestante = cantidad => {
        dispatch({
            type: ACTUALIZAR_RESTANTE,
            payload: cantidad
        })
    }

    return (
        <PresupuestoContext.Provider
            value={ {
                /* Variables */
                presupuestoInicial: state.presupuestoInicial,
                presupuestoRestante: state.presupuestoRestante,
                PresupuestoExiste: state.PresupuestoExiste,

                /* Funciones */
                establecerPresupuesto,
                obtenerPresupuesto,
                eliminarPresupuesto,
                restarPresupuesto,
                sumarPresupuestoGastoBorrado,
                actualizarRestante
            }}
        >
            {props.children}
        </PresupuestoContext.Provider>
    )
}

export default PresupuestoState
