import React from 'react';
import { expect } from 'chai';
import reducer from '../../js/src/reducers';

const name = "scott";
describe('Reducer test', () => {
  it('returns state when action missing', () => {
    let dummy = {dummy:'dumb'};
    expect(reducer(dummy, {type:'',data:''})).to.be.equal(dummy);
  });
});