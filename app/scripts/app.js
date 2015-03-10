'use strict';
var React = window.React = require('react/addons'),
    mountNode = document.getElementById("app");

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
      <div>
        0{' '}
        <input ref="input" type="range" min="0" max="100" onChange={this.onChange} value={this.props.value} />
        {' '}100
      </div>
    );
  }
});

var TextInput = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onChange(Number(this.refs.input.getDOMNode().value));
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <b>Value:</b>
        {' '}
        <input ref="input" type="number" min="0" max="100" />
        {' '}
        <button>Make it So</button>
      </form>
    );
  },
  setValueInDOM: function() {
    this.refs.input.getDOMNode().value = this.props.value;
  },
  componentDidUpdate: function(prevProps, prevState) {
    // No need to write to the DOM if nothing changed.
    if (this.props.value === prevProps.value) return;

    this.setValueInDOM();
  },
  componentDidMount: function() {
    this.setValueInDOM();
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
        <p>Dragging the slider will update the text box immediately.</p>
        <p>Editing the text box will only update the slider when you hit Enter
          or click the button.</p>
      </div>
    );
  }
});


React.render(<PairedInputApp />, mountNode);
