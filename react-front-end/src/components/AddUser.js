import React, { Component } from 'react';
import './AddUser.css';

class AddUser extends Component {
    render() {
        return (
            <form className="add-user-component" onSubmit={e => this.handleSubmit(e)}>
                <div className="labeled-input">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" name="firstName" id="first-name" ref="first_name" />
                </div>
                
                <div className="labeled-input">
                    <label htmlFor="first-name">Last Name</label>
                    <input type="text" name="firstName" id="first-name" ref="last_name" />
                </div>
                
                <div className="labeled-input">
                    <label htmlFor="first-name">Email</label>
                    <input type="text" name="firstName" id="first-name" ref="email" />
                </div>
                
                <div className="submit-buttons">
                    <button type="submit" className="primary raised">Submit</button>
                    <button onClick={() => this.props.onCancel()}>Cancel</button>
                </div>
            </form>
        );
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const { first_name: firstNameRef, last_name: lastNameRef, email: emailRef } = this.refs;
        const { value: first_name } = firstNameRef;
        const { value: last_name } = lastNameRef;
        const { value: email } = emailRef;
        
        const user = { first_name, last_name, email };
        
        this.props.onSubmit(user);
    }
}

export default AddUser;