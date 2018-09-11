import React, { Component } from "react";

import { connect } from "react-redux";

import { selectProfile, requestRepos, receiveRepos } from "../actions/";

import api from "../api";

import RepoList from "../components/RepoList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { profile: this.props.selected };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch, selected } = this.props;
    dispatch(requestRepos(selected));

    api
      .get(selected)
      .then(response => dispatch(receiveRepos(selected, response)));
  }

  handleChange({ target: { value } }) {
    this.setState({ profile: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { onSetSelected } = this.props;
    onSetSelected(this.state.profile);
  }

  render() {
    const { selected, repos } = this.props;

    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>Selected</label>
          <input
            type="text"
            placeholder="Type a GitHub profile name"
            value={this.state.profile}
            onChange={this.handleChange}
          />
        </form>
        {repos && <RepoList repos={repos} />}
      </section>
    );
  }
}

const mapStateToProps = ({ selectedProfile, reposByProfile }) => ({
  selected: selectedProfile,
  repos: reposByProfile[selectedProfile]
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch,
    onSetSelected: profile => {
      dispatch(selectProfile(profile));
      dispatch(requestRepos(profile));

      api
        .get(profile)
        .then(response => dispatch(receiveRepos(profile, response)));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
