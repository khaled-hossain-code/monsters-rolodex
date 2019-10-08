import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ monsters: users });
      });
  }

  state = {
    monsters: [],
    searchField: ""
  };

  searchMonster = event => {
    this.setState({
      searchField: event.target.value
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.searchMonster}/>
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
