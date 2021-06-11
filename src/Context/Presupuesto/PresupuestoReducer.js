import {
    ESTABLECER_PRESUPUESTO,
    OBTENER_PRESUPUESTO,
    ELIMINAR_PRESUPUESTO,
    RESTAR_PRESUPUESTO,
    SUMAR_PRESUPUESTO_GASTO_BORRADO,
    ACTUALIZAR_RESTANTE
} from './TypesPresupuesto';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {

        case ESTABLECER_PRESUPUESTO:
            localStorage.setItem('PresupuestoInicial', JSON.stringify(action.payload));
            localStorage.setItem('PresupuestoRestante', JSON.stringify(action.payload));
            return {
                ...state,
                presupuestoInicial: action.payload,
                presupuestoRestante: action.payload,
                PresupuestoExiste: true,
                cargando: false
            }
        case OBTENER_PRESUPUESTO:
            return {
                ...state,
                presupuestoInicial: JSON.parse(localStorage.getItem('PresupuestoInicial')),
                presupuestoRestante: JSON.parse(localStorage.getItem('PresupuestoRestante')),
                PresupuestoExiste: JSON.parse(localStorage.getItem('PresupuestoInicial')) ? true : false,
                cargando: false
            }
        case ELIMINAR_PRESUPUESTO:
            localStorage.removeItem('PresupuestoInicial');
            localStorage.removeItem('PresupuestoRestante');
            return {
                ...state,
                presupuestoInicial: 0,
                presupuestoRestante: 0,
                PresupuestoExiste: false
            }
        case RESTAR_PRESUPUESTO:
            localStorage.setItem('PresupuestoRestante', JSON.stringify(action.payload));
            return {
                ...state,
                presupuestoRestante: action.payload,
            }
        case SUMAR_PRESUPUESTO_GASTO_BORRADO:
            localStorage.setItem('PresupuestoRestante', JSON.stringify(action.payload));
            return {
                ...state,
                presupuestoRestante: action.payload,
            }
        case ACTUALIZAR_RESTANTE:
            localStorage.setItem('PresupuestoRestante', JSON.stringify(action.payload));
            return {
                ...state,
                presupuestoRestante: action.payload,
            }
        
        default:
            return state;
    }
}