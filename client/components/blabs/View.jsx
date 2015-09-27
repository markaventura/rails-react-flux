var React = require('react');
var BlabsList = require('./List.jsx');
var BlabStore = require('../../stores/Blob.react.jsx');
var BlabActionCreators = require('../../actions/BlobActionCreator.react.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      data: BlabStore.getAllBlabs(),
      errors: []
    };
  },

  componentDidMount: function() {
    BlabStore.addChangeListener(this._onChange);
    // debugger;
    BlabActionCreators.loadBlabs();
  },

  componentWillUnmount: function() {
    BlabStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    // debugger;
    this.setState({
      data: BlabStore.getAllBlabs(),
      errors: BlabStore.getErrors()
    });
  },
  readBlabsFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/blabs', function(blabs) {
      this.setState({data: blabs});
      console.log("success");
    }.bind(this));
  },
  render: function() {
    return (
      <div className="blabs-view">
        <BlabsList data={this.state.data} />
      </div>
    );
  }
});
