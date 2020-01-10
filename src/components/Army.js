import React from 'react';

let army = [
    ['Country', 'aircraft'],
    ['China', 2183000],
    ['India', 1395100],
    ['United States', 1347300],
    ['North Korea', 1190000],
    ['Russia', 831000],
    ['Pakistan', 653800],
    ['South Korea', 630000],
    ['Iran', 523000],
    ['Vietnam', 482000],
    ['Egypt', 438500],
    ['Myanmar', 406000],
    ['Indonesia', 395500],
    ['Thailand', 360850],
    ['Turkey', 355200],
    ['Brazil', 334500],
    ['Colombia', 293200],
    ['Mexico', 277150],
    ['Japan', 247150],
    ['Sudan', 244300],
    ['Sri Lanka', 243000],
    ['Saudi Arabia', 227000],
    ['Taiwan', 215000],
    ['Ukraine', 204000],
    ['France', 202950],
    ['Eritrea', 201750],
    ['Morocco', 195800],
    ['South Sudan', 185000],
    ['Germany', 176800],
    ['Israel', 176500]
];
class Army extends React.Component {
    state = {
        data: army,
    }
    render() {
        return (
            <div>
                <button className='btn-stat' onClick={() => {this.props.armyStatic(this.state.data)}}>Army</button>
            </div>
        )
    }
}

export default Army;