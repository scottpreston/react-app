import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

class AppContainer extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
    <div>App Container Here...</div>);
  }
}

export default connect(state => ({ }))(AppContainer);
