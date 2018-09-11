import { SELECT_PROFILE } from "../actions/";

const selectedProfile = (state = "reactjs", action) => {
  switch (action.type) {
    case SELECT_PROFILE:
      return action.profile;
    default:
      return state;
  }
};

export default selectedProfile;
