var ServerActionCreators = require('../actions/ServerActionCreator.react.jsx');
var SmallConstants = require('../constants/SmallConstants.jsx');
var request = require('superagent');

var APIEndpoints = SmallConstants.APIEndpoints;

module.exports = {

  loadBlabs: function() {
    request.get(APIEndpoints.BLABS)
      .set('Accept', 'application/json')
      .end(function(error, res){
        if (res) {
          json = JSON.parse(res.text);
          ServerActionCreators.receiveBlabs(json);
        }
      });
  }
};
