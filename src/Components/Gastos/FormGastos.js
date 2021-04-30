import React from 'react'

const FormGastos = () => {
    return (
        <div className="form-gastos shadow-lg">
            <form>
                <label htmlFor="cantidad" className="text-muted">Cantidad</label>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">$</span>
                    </div>
                    <input type="number" className="form-control input-app-gastos" id="cantidad" />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcionGasto" className="text-muted">Descripción</label>
                    <input type="text" className="form-control input-app-gastos" id="descripcionGasto"/>
                </div>
                <div>
                    <button className="btn btn-gastos-principal btn-block">Registrar</button>
                </div>
            </form>
        </div>
    )
}

export default FormGastos
