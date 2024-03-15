import React from 'react'
import Loading from "D:/React tube/program/src/Spin-1s-200px.gif"

 const Spinner = () => {
    return (
        <div className='text-center' >
            <img src={Loading} style={{ height: "100px" }} alt="loading" />
        </div>
    )

}

export default Spinner;