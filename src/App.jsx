import React, { Component } from 'react';
import LifeCycle from './components/LifeCycle'

class App extends Component {

  state = {
    display: true
  }

  remove = () => this.state.display == true ? (this.setState({ display : false})) : (this.setState({ display : true}))

  render () {
    console.log("Je suis dans le render App")

        const showComponent = this.state.display ? (<LifeCycle />) : (null);

    return (
      <div>
        {console.log("Je suis dans le render ==> return App")}
        {showComponent}
        {console.log("Je suis dans le render ==> return App")}
        <button onClick={this.remove}>Bouton</button>
      </div>
    );
  }
}

export default App;