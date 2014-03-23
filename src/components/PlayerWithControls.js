var React = require('react')
var PlayerControls = require('./PlayerControls')
var div = React.DOM.div;
var T   = React.PropTypes;

module.exports = React.createClass({displayName: "PlayerWithControls",
  propTypes: {
    audioPlayer: T.object.isRequired
  },
  getInitialState: function() {
    return {
      paused:       true,
      currentTime:  0,
      playbackRate: 1
    };
  },
  readAudioState: function() {
    var p = this.props.audioPlayer;
    this.setState({
      paused:       p.isPaused(),
      currentTime:  p.getCurrentTime(),
      playbackRate: p.getPlaybackRate()
    });
  },

  // schedule a timer to pull in audio player state
  componentDidMount: function() {
    this.interval = setInterval(this.readAudioState, 100);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    var p = this.props.audioPlayer;

    return div({},
      PlayerControls({
        paused:       this.state.paused,
        currentTime:  this.state.currentTime,
        playbackRate: this.state.playbackRate,
        onPlay:       p.play.bind(p),
        onPause:      p.pause.bind(p),
        onChangeRate: p.changeRate.bind(p)
      }));
  }
});