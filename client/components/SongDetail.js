import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import findSong from '../queries/findSong';

class SongDetail extends Component {
  render() {
    if (this.props.data.loading) return <div>Loading</div>;

    return (
      <div>
        <h3>
          {this.props.data.song.title}
        </h3>
      </div>
    );
  }
}

export default graphql(findSong, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
