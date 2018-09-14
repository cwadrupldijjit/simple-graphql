import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserCard.css';

class UserCard extends Component {
    render() {
        const { id, first_name, last_name, email, active } = this.props.user;
        
        return (
            <div className="user-card-component">
                <h2>{first_name} {last_name}</h2>
                <p>{email}</p>
                
                <div className="user-card-controls">
                    <label>
                        { active ? 'Mark this user inactive' : 'Mark this user active' }
                        <input
                            type="checkbox"
                            checked={active ? 'checked' : ''}
                            onChange={() => this.props.toggleActive(id, !active)}
                            value={active} />
                    </label>
                    <FontAwesomeIcon icon="trash" style={{ cursor: 'pointer' }} onClick={() => this.props.delete(id)} />
                </div>
            </div>
        );
    }
}

export default UserCard;