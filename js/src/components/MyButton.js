import React from 'react';
import ReactDOM from 'react-dom';
import {doItAction} from '../actions';
import css from 'bootstrap/dist/css/bootstrap.css';
import classnames from 'classnames';
import MyModal from './MyModal';

export default class MyButton extends React.Component {

  constructor() {
    super();
    this.bootstrapModal = this.bootstrapModal.bind(this);
  }

  bootstrapModal() {
     $('#MyModal').modal('show');
  }

  render() {
    let classes= classnames('btn','btn-success'); // if you wanted to use {classes}
    return (
        <div>
            <MyModal />
            <p>My Hello Prop : <strong>{this.props.hello}</strong>.</p>
            <button onClick={this.props.doIt} className={classes}>Populate Above</button>
            <button className="btn btn-primary">Sample Primary Button</button>
            <button className="btn btn-warning" onClick={this.bootstrapModal}>Bootstrap Modal</button>
        </div>
    );
  }
}
