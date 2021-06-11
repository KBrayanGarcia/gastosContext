import React, {lazy, Suspense, useContext} from 'react'
import LoaderELement from '../utils/LoaderElement/LoaderElement';

import GastosContext from '../../Context/Gastos/GastosContext';
const Gasto = lazy(() => import('./Gasto'))

const ResumenGastos = () => {

    const { gastos } = useContext(GastosContext);

    return (
        <div className="mt-2 d-flex align-items-center flex-column">
            {gastos.length > 0 ? gastos.map((gasto, index) => (
                <Suspense fallback={ <LoaderELement /> } key={ index }>
                    <Gasto  gasto={ gasto }/>
                </Suspense>
            )): <small>Agrega tu primer gasto para ver el registro aqui</small> }
        </div>
    )
}

export default ResumenGastos;
