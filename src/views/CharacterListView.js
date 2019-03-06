import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacter } from '../actions';
import Loader from 'react-loader-spinner';
import '../index.css'

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCharacter();
  }

  render() {
    if (this.props.fetching) {
      return (
        <div className="loading">
          <Loader type="Oval" color="#00bfff" height="200" width="150" />
        </div>
      )
    }
    return (
      <div className="container">
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
