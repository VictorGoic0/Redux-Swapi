import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacter } from '../actions';
import Loader from 'react-loader';

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCharacter();
  }

  render() {
    if (this.props.fetching) {
      <Loader type="Ball-Triangle" color="#00bfff" />
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.fetching,
  characters: state.characters
})

export default connect(
  mapStateToProps,
  { getCharacter }
)(CharacterListView);
