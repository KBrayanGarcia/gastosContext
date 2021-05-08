import React, {lazy, Suspense} from 'react'
import LoaderELement from '../utils/LoaderElement/LoaderElement';

const Gasto = lazy(() => import('./Gasto'))

const ResumenGastos = () => {
    return (
        <div className="mt-2 d-flex align-items-center flex-column">
            <Suspense fallback={ <LoaderELement /> }>
                <Gasto/>
            </Suspense>
        </div>
    )
}

export default ResumenGastos;
