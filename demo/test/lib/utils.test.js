'use strict';

describe('utils tests', () => {
  let utils;
  beforeEach(() => {
    utils = require('../../lib/utils');
  });

  // bad - no stub
  it('should get my name by user', () => {
    const name = utils.getName('bizob2828');
    expect(name).toEqual('Down on the Farm');
  });

  // good - stub external functions
  it('should get my name by user', () => {
    utils.callMeLater = jest.fn();
    const name = utils.getName('bizob2828');
    expect(name).toEqual('Down on the Farm');
    expect(utils.callMeLater).toHaveBeenCalledWith('Carly Rae');
  });

  it('should return name', () => {
    utils.callMeLater = jest.fn();
    expect(utils.getName('arei')).toEqual('Glen Goodwin');
    expect(utils.callMeLater).toHaveBeenCalledTimes(0);
  });
});
