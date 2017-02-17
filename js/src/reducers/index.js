export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SOMETHING':
      return {some: "thing"};
    default:
      return state;
  }
};