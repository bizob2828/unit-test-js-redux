'use strict';

describe('makeRequest tests', () => {
  let makeRequest;
  beforeEach(() => {
    jest.resetModules();
  });

  describe('BAD', () => {
    beforeEach(() => {
      makeRequest = require('../../lib/request');
    });

    it('should return user with id of 1', async () => {
      const response = await makeRequest(1);
      expect(response.name).toEqual('Leanne Graham');
    })
  });

  describe('GOOD', () => {
    let fetch, loggerMock;

    beforeEach(() => {
      jest.mock('node-fetch');
      jest.mock('../../lib/logger')
      loggerMock = require('../../lib/logger')
      makeRequest = require('../../lib/request');
      fetch = require('node-fetch');
    });

    it('should return user with id of 1', async () => {
      const userDeets = { id: 1, name: 'Bob Evans'};
      const responseMock = { json: jest.fn().mockResolvedValue(userDeets) };
      fetch.mockResolvedValue(responseMock);
      const response = await makeRequest(1);
      expect(response.name).toEqual('Bob Evans');
      expect(loggerMock.error).toHaveBeenCalledTimes(0);
    })

    it('should log and throw error when request fails', async() => {
      const err = new Error('request failed!!');
      fetch.mockRejectedValue(err);
      await expect(async () => {
        await makeRequest(1);
      }).rejects.toThrow(err);
      debugger;
      expect(loggerMock.error).toHaveBeenCalledWith('Failed to fetch %s, %j', 1, err);
    });
  });


});
