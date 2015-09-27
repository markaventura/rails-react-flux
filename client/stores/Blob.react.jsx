var SmallAppDispatcher = require('../dispatcher/SmallDispatcher.jsx');
var SmallConstants = require('../constants/SmallConstants.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
// var WebAPIUtils = require('../utils/APIUtils.jsx');
//
var ActionTypes = SmallConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _stories = [];
var _blabs = [];
var _errors = [];

var BlabStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllBlabs: function() {
    return _blabs;
  },

  getErrors: function() {
    return _errors;
  }

});
//
BlabStore.dispatchToken = SmallAppDispatcher.register(function(payload) {
  var action = payload.action;
  // debugger;
  switch(action.type) {

    case ActionTypes.RECEIVE_BLABS:
      // debugger
      _blabs = action.json;
      BlabStore.emitChange();
      break;
  }

  return true;
});

module.exports = BlabStore;
