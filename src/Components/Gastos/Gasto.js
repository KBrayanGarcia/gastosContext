import React from 'react'
import NumberFormat from 'react-number-format';

import './Gastos.css';

const Gasto = ({ gasto }) => {
    
    const { cantidad, descripcion } = gasto;

    return (
        <div className="bg-white rounded gasto-caja mb-2">
            <div className="toast-header d-flex justify-content-between align-items-center">
                <div className="cantidad">
                    <h6 className="mb-0 text-success">
                        <NumberFormat
                            value={ cantidad }
                            thousandSeparator={ true }
                            displayType="text"
                            prefix={'$'}
                        />
                    </h6>
                </div>
                <div className="acciones">
                    <i className="fas fa-edit text-warning mr-2"></i>
                    <i className="fas fa-trash text-danger"></i>
                </div>
            </div>
            <div className="toast-body py-1">
                <small className="text-muted"> {descripcion} </small>
            </div>
        </div>
    )
}

export default Gasto
