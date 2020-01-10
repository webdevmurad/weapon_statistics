import React from 'react';

let Ship = ({tanksStatic}) => {
    return (
        <div>
            <button className='btn-stat' onClick={tanksStatic}>Ship</button>
        </div>
    )
}

export default Ship;