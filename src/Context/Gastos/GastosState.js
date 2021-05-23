import React, {useReducer} from 'react'

import GastosReducer from './GastosReducer';
import GastosContext from './GastosContext';

import {
    AGREGAR_GASTO,
    CANCELAR_REINICIO_FORM_GASTOS
} from './TypesGastos';

const GastosState = (props) => {
    const initialState = {
        gastos: JSON.parse(localStorage.getItem('gastos')) || [],
        reiniciarformfastos: false
    }
    
    const [state, dispatch] = useReducer(GastosReducer, initialState);


    const agregarGasto = gasto => {
        dispatch({
            type: AGREGAR_GASTO,
            payload: gasto
        })
    }

    const cancelarReinicioFormGastos = () => {
        dispatch({
            type: CANCELAR_REINICIO_FORM_GASTOS
        })
    }

    return (
        <GastosContext.Provider
            value={ {
                /* Variables */
                gastos: state.gastos,
                reiniciarformfastos: state.reiniciarformfastos,

                /* Funciones */
                agregarGasto,
                cancelarReinicioFormGastos
            }}
        >

            {props.children}
            
        </GastosContext.Provider>
    )
}

export default GastosState
