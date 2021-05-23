import React, {lazy, Suspense, useContext} from 'react'
import LoaderELement from '../utils/LoaderElement/LoaderElement';

import GastosContext from '../../Context/Gastos/GastosContext';
const Gasto = lazy(() => import('./Gasto'))

const ResumenGastos = () => {

    const { gastos } = useContext(GastosContext);

    return (
        <div className="mt-2 d-flex align-items-center flex-column">
            {gastos.map((gasto, index) => (
                <Suspense fallback={ <LoaderELement /> } key={ index }>
                    <Gasto  gasto={ gasto }/>
                </Suspense>
            ))}
        </div>
    )
}

export default ResumenGastos;
