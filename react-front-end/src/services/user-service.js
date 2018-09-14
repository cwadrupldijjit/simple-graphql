import { graphqlEndpoint } from "../config";

function baseFetch(query, options = {}) {
    const { headers = {}, body = {}, ...restOfOpions } = options;
    
    return fetch(graphqlEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        body: JSON.stringify({
            query,
            ...body,
        }),
        ...restOfOpions,
    })
        .then(res => res.json());
}

function addUser(user) {
    const { first_name, last_name, email } = user;
    
    return baseFetch(`
        mutation {
            addUser(user: {
                first_name: "${first_name}",
                last_name: "${last_name}",
                email: "${email}"
            }) {
                id
                first_name
                last_name
                email
            }
        }
    `);
}

function getUsers(direction = 'ASC') {
    return baseFetch(`
        query {
            users(direction: ${direction}) {
                id
                first_name
                last_name
                email
                date_added
                active
            }
        }
    `);
}

function updateUser(updates) {
    const { id, active } = updates;
    
    updates = {
        id,
        active,
    };
    
    const queuedUpdates = Object.keys(updates)
        .map(k => {
            const type = typeof updates[k];
            
            if (type == 'string') {
                
                return `${k}: "${updates[k]}"`;
            }
            
            return `${k}: ${updates[k]}`;
        });
    
    return baseFetch(`
        mutation {
            updateUser(user: {
                ${queuedUpdates.join(',\n')}
            }) {
                first_name
                last_name
                date_added
                email
                id
                active
            }
        }
    `);
}

function deleteUser(id) {
    return baseFetch(`
        mutation {
            deleteUser(id: ${id}) {
                id
            }
        }
    `);
}


export {
    baseFetch,
    addUser,
    getUsers,
    updateUser,
    deleteUser,
}