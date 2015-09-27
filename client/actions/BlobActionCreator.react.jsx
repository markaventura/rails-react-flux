var SmallAppDispatcher = require('../dispatcher/SmallDispatcher.jsx');
var SmallConstants = require('../constants/SmallConstants.jsx');
var WebAPIUtils = require('../utils/WebAPIUtils.jsx');

var ActionTypes = SmallConstants.ActionTypes;

module.exports = {

  loadBlabs: function() {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_BLABS
    });
    WebAPIUtils.loadBlabs();
  }

};
