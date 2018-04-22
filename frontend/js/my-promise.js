'use strict';

class MyPromise {
  constructor(behaviorFunction) {
    behaviorFunction(
      this._resolve.bind(this),
      this._reject.bind(this),
    );

    this._status = 'pending';
    this._result = null;

    this._successCallbacks = [];
    this._errorCallbacks = [];

  }

  _resolve(data) {
    this._status = 'fulfilled';
    this._result = data;

    forEthis._successCallbacks.ach((callback) => {
      callback(data);
    });
  }

  _reject(error) {
    this._status = 'rejected';
    this._result = error;

    this._errorCallbacks.forEach((callback) => {
      callback(error);
    });
  }

  then(callback, errorCallback) {
    if (this._status === 'pending') {
      this._successCallbacks.push(callback);
      this._errorCallbacks.push(errorCallback);
    } else if (this._status === 'fulfilled') {
      callback(this._result);
    } else if (this._status === 'rejected') {
      errorCallback(this._result);
    }

    return new Promise(() => {});
  }

  catch(callback) {
    if (this._status === 'pending') {
      this._errorCallbacks.push(callback);
    } else if (this._status === 'rejected') {
      callback(this._result);
    }
  }
}