import React from 'react'

import './Gastos.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-item d-flex align-items-center">
                <h5 className="mb-0 text-center">Gastos Context</h5>
            </div>
            <hr className="my-2"/>
            <div className="sidebar-item d-flex align-items-center active ">
                <h6 className="mb-0">Inicio</h6>
            </div>
        </div>
    )
}

export default Sidebar
