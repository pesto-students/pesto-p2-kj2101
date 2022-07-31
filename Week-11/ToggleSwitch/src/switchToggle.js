const reducer = (state = 0, action) => {
  switch (action.type) {
    case "TOGGLE":
      return !state;
    default:
      return state;
  }
};
export default reducer;
