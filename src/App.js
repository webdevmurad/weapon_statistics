import React from 'react';
import Armament from './components/Armament';
import Tank from './components/Tank';
import Submarine from './components/Submarine';
import Aircraft from './components/Aircraft';
import Army from './components/Army';
import Ship from './components/Ship';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined
    }
    this.tanksStatic = this.tanksStatic.bind(this);
    this.aircraftStatic = this.aircraftStatic.bind(this);
  }

  aircraftStatic = (value) => {
    this.setState({data: value})
  }

  tanksStatic = (value) => {
    this.setState({data: value})
  }

  submarineStatic = (value) => {
    this.setState({data: value})
  }

  armyStatic = (value) => {
    this.setState({data: value})
  }

  shipStatic = (value) => {
    this.setState({data: value})
  }

  render() {
    return (
      <div className="App">
        <div className='stat-btns'>
          <Tank tanksStatic={this.tanksStatic}/>
          <Submarine submarineStatic={this.submarineStatic}/>
          <Aircraft aircraftStatic={this.aircraftStatic}/>
          <Army armyStatic={this.armyStatic}/>
          <Ship shipStatic={this.shipStatic}/>
        </div>
        <Armament data={this.state.data}
        />
      </div>
    )
  }
}

export default App;
