import React from 'react';


let aircraft = [
    ['Country', 'aircraft'],
    ["United States", 13398],
    ["USA", 4078],
    ["Russia", 3187],
    ["RUS", 2082],
    ["China", 1614],
    ["CHN", 1572],
    ["India", 1342],
    ["IND", 1248],
    ["South Korea", 1092],
    ["SKO", 1067],
    ["Japan", 949],
    ["JPN", 848],
    ["Pakistan", 837],
    ["PAK", 831],
    ["France", 811],
    ["FRA", 706],
    ["Egypt", 613],
    ["EGP", 595],
    ["Turkey", 568],
    ["TUR", 566],
    ["North Korea", 551],
    ["NKO", 541],
    ["Saudi Arabia", 522],
    ["SAR", 509],
    ["Taiwan", 493],
    ["TAI", 490],
    ["Italy", 469],
    ["ITA", 467],
    ["United Kingdom", 457],
    ["UKD", 451],
    ["Brazil", 384],
    ["BRA", 327],
    ["Germany", 318],
    ["GER", 293],
    ["Israel", 291],
    ["ISR", 290],
    ["Thailand", 288],
    ["THA", 285],
    ["Greece", 279],
    ["GRE", 276],
    ["Algeria", 269],
    ["ALG", 260],
    ["United Arab Emirates", 236],
    ["UAE", 220],
    ["Spain", 216],
    ["SPA", 206],
    ["Iran", 206],
    ["IRN", 200],
    ["Mexico", 197],
    ["MEX", 191],
    ["Colombia", 187],
    ["COL", 179],
    ["Poland", 175],
    ["POL", 175],
    ["Australia", 171],
    ["AUS", 169],
    ["Syria", 167],
    ["SYR", 161],
    ["Indonesia", 158],
    ["INO", 155],
    ["Canada", 151],
    ["CAN", 150],
    ["Iraq", 138],
    ["IRQ", 138],
    ["Vietnam", 131],
    ["VTN", 125],
    ["Chile", 118],
    ["CHI", 114],
    ["Morocco", 113],
    ["MOR", 107],
    ["Jordan", 106],
    ["JOR", 106],
    ["Peru", 100],
    ["PER", 100],
    ["Angola", 90],
    ["ANG", 87],
    ["Venezuela", 85],
    ["VEN", 85],
    ["Myanmar", 82],
    ["MYA", 81],
    ["Argentina", 78],
    ["ARG", 76],
    ["Ukraine", 72],
    ["UKR", 67],
    ["Singapore", 63],
    ["SIN", 63],
    ["Afghanistan", 60],
    ["AFG", 56],
    ["Kazakhstan", 51],
    ["KAZ", 51],
    ["South Africa", 48],
    ["SAF", 48],
    ["Sweden", 44],
    ["SWE", 44],
    ["Finland", 42],
    ["FIN", 42],
    ["Belarus", 41],
    ["BLR", 38],
    ["Sudan", 34],
    ["SUD", 33],
    ["Malaysia", 32],
    ["MLY", 32],
    ["Uzbekistan", 32],
    ["UZB", 31],
    ["Bangladesh", 30],
    ["BAN", 29],
    ["Oman", 26],
    ["OMA", 25],
    ["Philippines", 25],
    ["PHI", 24],
    ["Yemen", 23],
    ["YEM", 22],
    ["Switzerland", 21],
    ["SWI", 20],
    ["Netherlands", 20],
    ["NET", 19],
    ["Belgium", 19],
    ["BEL", 19],
    ["Tunisia", 16],
    ["TUN", 15],
    ["Romania", 15],
    ["ROM", 13],
    ["Kenya", 12],
    ["KEN", 9],
    ["Azerbaijan", 9],
    ["AZR", 8],
    ["Norway", 5],
    ["NOR", 5],
    ["Nigeria", 5],
    ["NIG", 5],
    ["Austria", 5],
    ["AST", 3],
    ["Libya", 3],
    ["LBY", 3],
    ["Ecuador", 2],
    ["ECU", 2],
    ["Denmark", 0]
];

class Aircraft extends React.Component {
    state = {
        data: aircraft,
    }
    render() {
        return (
            <div>
                <button className='btn-stat' onClick={() => {this.props.aircraftStatic(this.state.data)}}>Aircraft</button>
            </div>
        )
    }
}

export default Aircraft;