'use strict';
var React = window.React = require('react/addons'),
    Timer = require("./ui/Timer"),
    mountNode = document.getElementById("app");

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

var RangeSlider = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
  },
  onChange: function(e) {
    this.props.onChange(Number(this.refs.input.getDOMNode().value));
  },
  render: function() {
    return (
      <input ref="input" type="range" min="0" max="100" onChange={this.onChange} value={this.props.value} />
    );
  }
});

var TextInput = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
  },
  onChange: function(e) {
    this.props.onChange(Number(this.refs.input.getDOMNode().value));
  },
  render: function() {
    return (
      <form>
        <b>Value:</b>
        &nbsp;
        <input ref="input" type="number" min="0" max="100" onChange={this.onChange} value={this.props.value} />
      </form>
    );
  }
});

var PairedInputApp = React.createClass({
  getInitialState: () => ({
    value: 50
  }),
  handleChange: function(value) {
    this.setState({value});
  },
  render: function() {
    return (
      <div>
        <h3>Paired inputs</h3>
        <RangeSlider onChange={this.handleChange} value={this.state.value} />
        <TextInput onChange={this.handleChange} value={this.state.value} />
      </div>
    );
  }
});


React.render(<PairedInputApp />, mountNode);
