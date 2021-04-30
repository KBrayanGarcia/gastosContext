import React from 'react'

import './Presupuesto.css';

const PresupuestoForm = () => {
    return (
        <form className="presupuesto-form text-white p-4">
            <div>
                <h4 className="text-center"> Presupuesto Inicial</h4>
            </div>
            <div className="campos">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">$</span>
                    </div>
                    <input type="number" className="form-control input-app-gastos" id="presupuesto" />
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
