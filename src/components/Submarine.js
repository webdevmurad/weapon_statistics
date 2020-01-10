import React from 'react';

let submarine = [
    ['Country', 'submarine'],
    ['North Korea', 70],
    ['China', 40],
    ['Iran', 28],
    ['South Korea', 18],
    ['India', 18],
    ['Russia', 17],
    ['Japan', 16],
    ['Turkey', 13],
    ['Greece', 11],
    ['Vietnam', 8],
    ['Pakistan', 8],
    ['Brazil', 7],
    ['Peru', 6],
    ['Australia', 6],
    ['Italy', 6],
    ['Israel', 6],
    ['Norway', 6],
    ['Sweden', 5],
    ['Poland', 5],
    ['Colombia', 4],
    ['Taiwan', 4],
    ['Algeria', 4],
    ['Chile', 4],
    ['Netherlands', 4],
    ['Egypt', 4],
    ['Germany', 4],
    ['Spain', 4],
    ['Singapore', 4],
    ['Libya', 3],
    ['South Africa', 3],
    ['Syria', 3],
    ['Argentina', 3],
    ['Portugal', 2],
    ['Malaysia', 2],
    ['Ecuador', 2],
    ['United States', 2],
    ['Venezuela', 2],
    ['Indonesia', 2],
    ['Romania', 1],
    ['Bulgaria', 1]
];	

class Submarine extends React.Component {
    state = {
        data: submarine,
    }
    render() {
        return (
            <div>
                <button className='btn-stat' onClick={() => {this.props.submarineStatic(this.state.data)}}>Submarine</button>
            </div>
        )
    }
}

export default Submarine;