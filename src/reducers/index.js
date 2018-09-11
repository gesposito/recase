import { combineReducers } from "redux";

import reposByProfile from "./reposByProfile";
import selectedProfile from "./selectedProfile";

const rootReducer = combineReducers({
  selectedProfile,
  reposByProfile
});

export default rootReducer;
