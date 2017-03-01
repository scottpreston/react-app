import React from 'react';
import ReactDOM from 'react-dom';
import {doItAction} from '../actions';
import css from 'bootstrap/dist/css/bootstrap.css';
import classnames from 'classnames';

export default class MyButton extends React.Component {

  constructor() {
    super();
  }

  // doIt() {
  //   let {dispatch} = this.props;
  //   dispatch(doItAction({}));
  // }

  do() {
    this.props.doIt()
  }

  render() {
    let classes= classnames('btn','btn-success'); // if you wanted to use {classes}
    return (      
        <div>
            <p>My Hello Prop : <strong>{this.props.hello}</strong>.</p>
            <button onClick={this.props.doIt} className={classes}>Populate Above</button>
            <button className="btn btn-primary">Sample Primary Button</button>
        </div>
    );
  }
}