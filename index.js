const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { importSchema } = require('graphql-import');
const expressGraphql = require('express-graphql');
const graphql = require('graphql');

const userService = require('./fake-data');


// ----------- Bootstrap app -----------

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());



// ------------ Graphql ----------------

const stringSchema = importSchema('./schemas/schema.graphql');

const schema = graphql.buildSchema(stringSchema);

const root = {
    hello() {
        return 'Hello, World!';
    },
    user({ id }) {
        return userService.getUser(id || 1);
    },
    users({ direction }) {
        return userService.getUsers(direction);
    },
    addUser({ user }) {
        return userService.addUser(user);
    },
    deleteUser({ id }) {
        return userService.deleteUser(id);
    },
    updateUser({ user }) {
        return userService.updateUser(user);
    },
};


app.use('/graphql', expressGraphql({
    rootValue: root,
    graphiql: true,
    schema,
}));



// ------------ Start app --------------

app.listen(8000, () => console.log('App running at localhost:8000'));
