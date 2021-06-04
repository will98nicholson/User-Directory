import { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Table from './components/Table';

class App extends Component {
  state = {
    users: [],
    input: ""
  };
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App" >
        < SearchBar handleInputChange={this.handleInputChange} ></SearchBar>
        < Table></Table>
      </div>
    );
  }
}

export default App;
