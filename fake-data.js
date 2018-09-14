function makeIdCounter() {
    let id = 1;
    
    return () => ++id;
}

const getNextId = makeIdCounter();

const ASC = 'ASC';
const DESC = 'DESC';

const users = [
    {
        first_name: 'Simon',
        last_name: 'Tuttle',
        email: 'ninjatuttle@hotmail.com',
        id: 1,
        date_added: new Date(),
        active: false,
    },
];

function addUser(user) {
    user.id = getNextId();
    user.date_added = new Date();
    user.active = false;
    users.push(user);
    
    return user;
}

function getUser(id) {
    if (id) {
        return users.find(u => u.id == id);
    }
    
    return null;
}

function deleteUser(id) {
    if (!id) {
        throw Error('An ID is required');
    }
    
    const index = users.findIndex(u => u.id == id);
    
    if (index < 0) {
        throw Error('Could not find user with id ' + id);
    }
    
    const [ user ] = users.splice(index, 1);
    
    return user;
}

function updateUser(user) {
    if (!user.id) {
        throw Error('Updating a user requires an id');
    }
    
    if (user.date_added) delete user.date_added;
    
    const originalUser = users.find(u => u.id == user.id);
    
    if (!originalUser) {
        throw Error('Could not find user with id ' + id);
    }
    
    return Object.assign(originalUser, user);
}

function getUsers(direction = ASC) {
    let results = [];
    
    if (direction == ASC) {
        results = users.slice();
    }
    else if (direction == DESC) {
        results = users.slice().reverse();
    }
    
    return results;
}

module.exports = {
    addUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser,
};