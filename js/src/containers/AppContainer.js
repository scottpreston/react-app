import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {initAction, doItAction} from '../actions';
import Hello from '../components/Hello';
import MyButton from '../components/MyButton';

  class AppContainer extends React.Component {

    constructor(props){
      super(props);
    }

    componentDidMount() {
      // passed down since it's connected.
    // let {dispatch} = this.props;
    // dispatch(initAction({}));
    this.props.init();
    }

    render() {
      console.log(this.props)
      return (
      <div>
      <h1>App Container Here!</h1>
      <Hello name={this.props.init}/>
      <MyButton hello={this.props.hello} doIt={this.props.doIt}/>
      </div>);
    }
  }

// all this does is map props.init -> state.init, props.hello -> state.hello
function mapStateToProps(state) {
  return { 
    init: state.init, 
    hello: state.hello 
  };
}

function mapDispatchToProps(dispatch) {
  return {
       init: function() {
         dispatch(initAction({}));
       },
      doIt : function() {
          dispatch(doItAction({}));
      }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);
