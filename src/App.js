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

  searchUsers = () => [
    api.retrieveUsers()
      .then((res) => {
        let filter = this.state.input
        let narrowedSearch = res.data.results.filter(item => {
          let data = Object.values(item.name.first).join("").toLowerCase();
          return data.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({
          users: narrowedSearch
        })
      })
      .catch((err) => {
        console.log(err);
      })
  ]
  handleInputChange = event => {
    event.preventDefault();
    this.searchUsers();
  }


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
