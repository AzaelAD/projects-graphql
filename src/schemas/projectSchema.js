const { gql } = require('apollo-server');

const typeDefs = gql`
    type Project {
        _id: ID!
        name: String!
        description: String!
        startDate: String!
        endDate: String!
        status: Boolean!
        budget: Int!
    }
    
    type Query {
        getAllProjects: [Project]!
    }

    type Mutation {
        createProject(name: String!, description: String!, startDate: String!, endDate: String!, budget: Int!): Project!
        updateProject(_id: ID!, status: Boolean!): Project!
        deleteProject(_id: ID!): Project!
    }

`;

module.exports = typeDefs;