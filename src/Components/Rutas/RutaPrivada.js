import React, {useEffect, useContext} from 'react'
import PresupuestoContext from '../../Context/Presupuesto/PresupuestoContext'
import { Route, Redirect } from 'react-router-dom';

const RutaPrivada = ({ component: Component, ...props }) => {
    
    const { PresupuestoExiste, obtenerPresupuesto, cargando } = useContext(PresupuestoContext);

    useEffect(() => {
        obtenerPresupuesto()
    // eslint-disable-next-line
    }, [])

    return (
        <Route { ...props } render={ props => !PresupuestoExiste && !cargando ?
            
                <Redirect to='/' />
            :
                <Component { ...props } />}
        />
    )
}

export default RutaPrivada
