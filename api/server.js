var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
// GraphQL schema
var schema = buildSchema(`
    type Query {
        hero(id: Int!): Hero
        heroes(role: String!): [Hero]
    },
    type Hero {
        id: Int
        name: String
        damage: Int
        role: String
    }
`);
var heroesData = [
    {
        id: 1,
        name: 'Junkrat',
        damage: 120,
        role: 'Defence'
    },
    {
        id: 2,
        name: 'Soldier 76',
        damage: 15,
        role: 'Attack'
    },
    {
        id: 3,
        name: 'Widowmaker',
        damage: 100,
        role: 'Defence'
    }
]
var getHero = function(args) {
    var id = args.id;
    console.log(`Getting hero id: ${id}`);
    return heroesData.filter(hero => {
        return hero.id == id;
    })[0];
}
var getHeroes = function(args) {
    if (args.role) {
        var role = args.role;
        console.log(`Getting heroes for role: ${role}`);
        return heroesData.filter(hero => hero.role === role);
    } else {
        return [];
    }
}
var root = {
    hero: getHero,
    heroes: getHeroes
};
// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));