const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;
const Lyric = mongoose.model('lyric');

const SpotType = new GraphQLObjectType({
  name:  'SpotType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: new GraphQLList(GraphQLString) },
    neighbourhood: { type: GraphQLString },
    tip: { type: GraphQLString },
    website: { type: GraphQLString }
  })
});

module.exports = SpotType;
