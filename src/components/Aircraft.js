import React from 'react';

let Aircraft = ({tanksStatic}) => {
    return (
        <div>
            <button className='btn-stat' onClick={tanksStatic}>Aircraft</button>
        </div>
    )
}

export default Aircraft;