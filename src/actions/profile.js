export const SELECT_PROFILE = "SELECT_PROFILE";

export const selectProfile = (profile) => {
  return {
    type: SELECT_PROFILE,
    profile
  };
}
