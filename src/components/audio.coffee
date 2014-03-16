React = require('react');

# some 'imports'
DOM = React.DOM
T = React.PropTypes


module.exports = React.createClass({
  displayName: 'Audio'

  # inputs
  propTypes: {
    src: T.string.isRequired
  }

  render: ->
    DOM.audio({
      controls: "controls"
      type: "audio/mp3"
      src: @props.src
    })
})