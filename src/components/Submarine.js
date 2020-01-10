import React from 'react';

let Submarine = ({tanksStatic}) => {
    return (
        <div>
            <button className='btn-stat' onClick={tanksStatic}>Submarine</button>
        </div>
    )
}

export default Submarine;