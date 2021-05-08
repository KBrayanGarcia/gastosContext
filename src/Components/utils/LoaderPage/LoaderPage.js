import React from 'react'
import './LoaderPage.css';

const LoaderPage = () => {
    return (
        <div className="">
            <div className="loader-content d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-white" role="status">
                </div>
            </div>
        </div>
    )
}

export default LoaderPage
