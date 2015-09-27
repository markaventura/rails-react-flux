var SmallAppDispatcher = require('../dispatcher/SmallDispatcher.jsx');
var SmallConstants = require('../constants/SmallConstants.jsx');

var ActionTypes = SmallConstants.ActionTypes;

module.exports = {

  receiveBlabs: function(json) {
    // debugger;
    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_BLABS,
      json: json
    });
  }

};
