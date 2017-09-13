const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const SongType = require('./song_type');
const LyricType = require('./lyric_type');
const SpotType = require('./spot.type');
const Lyric = mongoose.model('lyric');
const Song = mongoose.model('song');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    songs: {
      type: new GraphQLList(SongType),
      resolve() {
        return Song.find({});
      }
    },
    song: {
      type: SongType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Song.findById(id);
      }
    },
    lyric: {
      type: LyricType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return Lyric.findById(id);
      }
    },
    spot: {
      type: SpotType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      async resolve(parentValue, { id }, { airtable }) {
        try {
          const record = await airtable('Spots').find(id);
          console.log('RECORD', record);
          return record.fields;
        } catch (e) {
          console.log('ERROR:', e);
        }
      }
    }
  })
});

module.exports = RootQuery;
