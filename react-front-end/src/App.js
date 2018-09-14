import React, { Component } from 'react';
import './App.css';
import UserCard from './components/UserCard';
import AddUser from './components/AddUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as userService from './services/user-service';

class App extends Component {
  state = {
    users: [],
    showForm: false,
  };
  
  componentWillMount() {
    this.fetchUsers();
  }
  
  render() {
    const { showForm } = this.state;
    const users = this.state.users.map((user, i) => (
      <UserCard
          user={user}
          delete={this.handleDelete}
          toggleActive={this.handleActiveToggle}
          key={i} />
    ));
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">User Management</h1>
        </header>
        
        { showForm ?
            <AddUser onSubmit={this.handleUserAdd} onCancel={this.toggleForm} /> :
            <button onClick={this.toggleForm}>
              <FontAwesomeIcon icon="plus" />
              Add a User
            </button> }
        
        { !showForm && users }
      </div>
    );
  }
  
  fetchUsers() {
    userService.getUsers(this.state.direction)
      .then(res => this.setState({ users: res.data.users }));
  }
  
  handleActiveToggle = (id, activate) => {
    const users = [...this.state.users];
    const index = users.findIndex(u => u.id == id);
    const user = users[index];
    
    user.active = activate;
    
    userService.updateUser(user)
      .then(result => {
        users.splice(index, 1, result.data.updateUser);
        
        this.setState({ users });
      });
  };
  
  handleDelete = id => {
    userService.deleteUser(id)
      .then(() => {
        this.fetchUsers();
      });
  };
  
  handleUserAdd = user => {
    userService.addUser(user)
      .then(() => {
        this.toggleForm();
        this.fetchUsers();
      });
  };
  
  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };
}

export default App;
