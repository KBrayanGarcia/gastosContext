import React from 'react'

import './Gastos.css';

const Gasto = () => {
    return (
        <div className="bg-white rounded gasto-caja">
            <div className="toast-header d-flex justify-content-between align-items-center">
                <div className="cantidad">
                    <h6 className="mb-0 text-success">500</h6>
                </div>
                <div className="acciones">
                    <i className="fas fa-edit text-warning mr-2"></i>
                    <i className="fas fa-trash text-danger"></i>
                </div>
            </div>
            <div className="toast-body py-1">
                <small className="text-muted"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, obcaecati.</small>
            </div>
        </div>
    )
}

export default Gasto
