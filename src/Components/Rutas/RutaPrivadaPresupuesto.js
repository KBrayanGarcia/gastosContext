import React, {useContext, useEffect} from 'react'
import { Route, Redirect } from 'react-router-dom';
import PresupuestoContext from '../../Context/Presupuesto/PresupuestoContext';


const RutaPrivadaPresupuesto = ({ component: Component, ...props }) => {
    
    const { PresupuestoExiste,cargando,  obtenerPresupuesto } = useContext(PresupuestoContext);

    useEffect(() => {
        obtenerPresupuesto()
    // eslint-disable-next-line
    }, [])

    return (
        <Route { ...props } render={ props => PresupuestoExiste && !cargando ?
            <Redirect to="/gastos" />
            :
            <Component { ...props } /> }
        />
    )
}

export default RutaPrivadaPresupuesto
