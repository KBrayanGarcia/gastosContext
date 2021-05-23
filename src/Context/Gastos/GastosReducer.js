import {
    AGREGAR_GASTO,
    CANCELAR_REINICIO_FORM_GASTOS
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

        default:
            return state;
    }
}