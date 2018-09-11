import { REQUEST_REPOS, RECEIVE_REPOS } from "../actions/";

import { updateObject } from "./utils";

const addProfileRepos = (
  reposState = {
    isFetching: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case REQUEST_REPOS:
      return updateObject(reposState, {
        isFetching: true
      });
    case RECEIVE_REPOS:
      return updateObject(reposState, {
        isFetching: false,
        items: action.repos
      });
    default:
      return reposState;
  }
};

const addRepos = (state, action) => {
  return updateObject(state, {
    [action.profile]: addProfileRepos(state[action.profile], action)
  });
};

const reposByProfile = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_REPOS:
    case RECEIVE_REPOS:
      return addRepos(state, action);
    default:
      return state;
  }
};

export default reposByProfile;
