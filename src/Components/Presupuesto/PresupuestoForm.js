import React from 'react'

import './Presupuesto.css';

const PresupuestoForm = () => {
    return (
        <form className="presupuesto-form text-white p-4">
            <div>
                <h4 className="text-center"> Presupuesto Inicial</h4>
            </div>
            <div className="campos">
                <div className="form-group">
                    <label htmlFor="presupuesto" className="text-muted">Introduce tu presupuesto inicial</label>
                    <input type="number" className="form-control input-app-gastos" id="presupuesto"/>
                </div>
            </div>
            <div>
                <button className="btn btn-gastos-principal btn-block" type="submit">
                    Ingresar
                </button>
            </div>
        </form>
    )
}

export default PresupuestoForm
