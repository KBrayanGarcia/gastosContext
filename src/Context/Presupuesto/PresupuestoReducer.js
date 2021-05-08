import {
    ESTABLECER_PRESUPUESTO,
    OBTENER_PRESUPUESTO
} from './TypesPresupuesto';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {

        case ESTABLECER_PRESUPUESTO:
            localStorage.setItem('PresupuestoInicial', JSON.stringify(action.payload));
            localStorage.setItem('PresupuestoRestante', JSON.stringify(action.payload));
            return {
                presupuestoInicial: action.payload,
                presupuestoRestante: action.payload,
                PresupuestoExiste: true,
                cargando: false
            }
        case OBTENER_PRESUPUESTO:
            return {
                presupuestoInicial: JSON.parse(localStorage.getItem('PresupuestoInicial')),
                presupuestoRestante: JSON.parse(localStorage.getItem('PresupuestoRestante')),
                PresupuestoExiste: JSON.parse(localStorage.getItem('PresupuestoInicial')) ? true : false,
                cargando: false
            }
        
        default:
            return state;
    }
}