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
  }


  tanksStatic() {
    console.log('По кнопке кликнули');
  }

  render() {
    return (
      <div className="App">
        <div className='stat-btns'>
          <Tank tanksStatic={this.tanksStatic}/>
          <Submarine/>
          <Aircraft/>
          <Army/>
          <Ship/>
        </div>
        <Armament data={this.state.data}/>
      </div>
    )
  }
}

export default App;
