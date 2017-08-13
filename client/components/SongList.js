import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { Link } from 'react-router';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading </div>;
    }

    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link className="red right btn-floating btn-large" to="songs/new">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);
