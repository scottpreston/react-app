import { MyActions } from '../actions'

export default (state={}, action) => {
  switch (action.type) {
    case MyActions.INIT:
      return {init:'scott', hello: state.hello};
    case MyActions.DO_IT:
      return {init: state.init, hello: 'world'};
    default:
      return {init:'none',hello:''};
  }
};