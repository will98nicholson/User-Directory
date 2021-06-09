import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import api from './util/API';

class App extends Component {
  state = {
    users: [],
    input: ""
  };
  componentDidMount() {
    api.retrieveUsers().then(res => {
      console.log(res);
      this.setState({
        users: res.data.results
      })
    })
  }
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  // filter data based on user's search
  searchUsers = () => {
    let typeName = this.state.users.filter((user) => {
      return (
        user.name.first.toLowerCase().includes(this.state.input.toLowerCase()) ||
        user.name.last.toLowerCase().includes(this.state.input.toLowerCase()) ||
        user.email.toLowerCase().includes(this.state.input.toLowerCase())
      )
    })
    this.setState({ users: typeName })
  };
  // live update on page
  handleInputChange = event => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({ input: value }, () => {
      this.searchUsers();
    })

  };


  render() {
    return (
      <div className="App" >
        < Header SortByName={this.SortByName}></Header>
        < SearchBar handleInputChange={this.handleInputChange} ></SearchBar>
        < Table users={this.state.users}></Table>
      </div>
    );
  }
}

export default App;
