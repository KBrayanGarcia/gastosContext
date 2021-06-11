import {
    AGREGAR_GASTO,
    CANCELAR_REINICIO_FORM_GASTOS,
    ELIMINAR_GASTOS,
    ELIMINAR_GASTO,
    ACTIVAR_EDICION_GASTO,
    CANCELAR_EDICION_GASTO,
    EDITAR_GASTO
} from './TypesGastos';

/* eslint-disable */
export default (state, action) => {
    switch (action.type) {
        case AGREGAR_GASTO:
            const nuevosGastos = [...state.gastos, action.payload];
            localStorage.setItem('gastos', JSON.stringify(nuevosGastos));
            return {
                ...state,
                gastos: nuevosGastos,
                reiniciarformfastos: true
                
            }
        case CANCELAR_REINICIO_FORM_GASTOS:
            return {
                ...state,
                reiniciarformfastos: false
            }
        case ELIMINAR_GASTOS:
            localStorage.removeItem('gastos');
            return {
                ...state,
                gastos: []
            }
        case ELIMINAR_GASTO:
            localStorage.setItem('gastos', JSON.stringify(action.payload));
            return {
                ...state,
                gastos: action.payload,
            }
        case ACTIVAR_EDICION_GASTO:
            return {
                ...state,
                gasto_a_editar: action.payload,
                estado_edicion: true
            }
        case CANCELAR_EDICION_GASTO:
            return {
                ...state,
                gasto_a_editar: {},
                estado_edicion: false,
                reiniciarformfastos: true
            }
        case EDITAR_GASTO:
            localStorage.setItem('gastos', JSON.stringify(action.payload));
            return {
                ...state,
                gasto_a_editar: {},
                estado_edicion: false,
                reiniciarformfastos: true,
                gastos: action.payload
            }

        default:
            return state;
    }
}