import React, {useState, useContext, useEffect} from 'react'
import { withRouter } from 'react-router-dom';

import PresupuestoContext from '../../Context/Presupuesto/PresupuestoContext';
import { alerta } from '../../Herramientas';
import './Presupuesto.css';

const PresupuestoForm = (props) => {

    const { establecerPresupuesto, PresupuestoExiste, obtenerPresupuesto} = useContext(PresupuestoContext);

    const [presupuestoinput, actualizarPresupuestoInput] = useState(0)

    useEffect(() => {
        if (PresupuestoExiste) {
            props.history.push('/gastos');
        }
    // eslint-disable-next-line
    }, [PresupuestoExiste])

    useEffect(() => {
        obtenerPresupuesto()
    // eslint-disable-next-line
    }, [])
    
    

    const onSubmitPresupuesto = e => {
        e.preventDefault();
        if (presupuestoinput <= 0) {
            alerta('El presupuesto debe ser mayor a $0', 'danger');
            return;
        }

        establecerPresupuesto(presupuestoinput);
    }


    return (
        <form className="presupuesto-form text-white p-4" onSubmit={onSubmitPresupuesto}>
            <div>
                <h4 className="text-center"> Presupuesto Inicial</h4>
            </div>
            <div className="campos">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">$</span>
                    </div>
                    <input
                        type="number"
                        className="form-control input-app-gastos"
                        id="presupuesto"
                        value={ presupuestoinput }
                        onChange={ e => actualizarPresupuestoInput(Number(e.target.value)) }
                    />
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

export default withRouter(PresupuestoForm)
