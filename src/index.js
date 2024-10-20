const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/projectSchema');
const resolvers = require('./resolvers/projectResolver');

const startServer = async () => {
    await mongoose.connect('mongodb+srv://alazamaralde:eVzE7gndAdZ0nKGl@aldocluster.bynde.mongodb.net/?retryWrites=true&w=majority&appName=AldoCluster');
    const server = new ApolloServer({ typeDefs, resolvers});

    server.listen().then(({url}) => {
        console.log(`Servidor corriendo en ${url}`);
    });
}

startServer();