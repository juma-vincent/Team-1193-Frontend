const getCurrentUser = (user) => ({
  type: "GET_CURRENT_USER",
  payload: user,
});

export default getCurrentUser;