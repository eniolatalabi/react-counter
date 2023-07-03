import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0
    }
  }

    increment = () => {
      this.setState({count: this.state.count + 1});
    }

    decrement = () => {
      this.setState({count: this.state.count - 1});
    }

  render () {
    return (
      <div className="App grid place-content-center h-screen gap-3">
        <div className='flex gap-1'>
        <button className='p-3 bg-gray-500 rounded-3xl' onClick={this.increment}>+</button>
        <button className='p-3 bg-gray-500 rounded-3xl' onClick={this.decrement}>-</button>
     </div>
        <h2 className='p-6 bg-gray-500 rounded-3xl grid place-content-center'>{this.state.count}</h2>
      </div>
    );
  }
}

export default App;
