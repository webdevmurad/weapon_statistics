import React from 'react';

let Army = ({tanksStatic}) => {
    return (
        <div>
            <button className='btn-stat' onClick={tanksStatic}>Army</button>
        </div>
    )
}

export default Army;