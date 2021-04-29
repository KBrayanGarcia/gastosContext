import React from 'react'

const FormGastos = () => {
    return (
        <div className="form-gastos">
            <form>
                <div className="form-group">
                    <label htmlFor="cantidadGasto" className="text-muted">Cantidad</label>
                    <input type="number" className="form-control input-app-gastos" id="cantidadGasto"/>
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
