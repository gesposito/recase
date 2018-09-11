export const REQUEST_REPOS = "REQUEST_REPOS";
export const RECEIVE_REPOS = "RECEIVE_REPOS";

export const requestRepos = profile => {
  return {
    type: REQUEST_REPOS,
    profile
  };
};

export const receiveRepos = (profile, repos) => {
  return {
    type: RECEIVE_REPOS,
    profile,
    repos: repos
  };
};