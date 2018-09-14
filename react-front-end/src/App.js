import React, { Component } from 'react';
import './App.css';
import UserCard from './components/UserCard';
import AddUser from './components/AddUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends Component {
  state = {
    users: [],
    showForm: false,
  };
  
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
            <AddUser onCancel={this.toggleForm} /> :
            <button onClick={this.toggleForm}>
              <FontAwesomeIcon icon="plus" />
              Add a User
            </button> }
        
        { !showForm && users }
      </div>
    );
  }
  
  handleActiveToggle = (id, activate) => {
    console.log('activate', `${id}`, activate);
    
    const users = [...this.state.users];
    const index = users.findIndex(u => u.id == id);
    const user = users[index];
    
    user.active = activate;
    
    users.splice(index, 1, user);
    
    this.setState({ users });
  };
  
  handleDelete = id => {
    console.log('delete', id);
  };
  
  handleUserAdd = user => {
    console.log('user added', user);
  };
  
  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };
}

export default App;
