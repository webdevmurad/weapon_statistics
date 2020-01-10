import React from 'react';

let Tank = ({tanksStatic}) => {
    return (
        <div>
            <button className='btn-stat' onClick={tanksStatic}>Tanks</button>
        </div>
    )
}

export default Tank;