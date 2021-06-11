import React, {useContext} from 'react'
import NumberFormat from 'react-number-format';

import {Querys} from '../utils/Querys';
import GastosContext from '../../Context/Gastos/GastosContext';
import './Gastos.css';

const Gasto = ({ gasto }) => {
    
    const {eliminarGasto, activarEdicionGasto} = useContext(GastosContext)
    const { cantidad, descripcion } = gasto;
    const queryLaptop = Querys('(min-width: 768px)');


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
                    { queryLaptop
                        ?
                            <i className="fas fa-edit text-warning mr-2" onClick={ () => activarEdicionGasto(gasto) }></i>
                        :
                            <i className="fas fa-edit text-warning mr-2" onClick={ () => activarEdicionGasto(gasto) } data-toggle="modal" data-target="#exampleModal"></i>
                    }
                    <i className="fas fa-trash text-danger" onDoubleClick={ () => eliminarGasto(gasto.id, cantidad) }></i>
                </div>
            </div>
            <div className="toast-body py-1">
                <small className="text-muted"> {descripcion} </small>
            </div>
        </div>
    )
}

export default Gasto
