var React = require('react')

var div    = React.DOM.div;
var button = React.DOM.button;
var T      = React.PropTypes;

module.exports = React.createClass({displayName: "PlayerControls",
  propTypes: {
    paused:       T.bool.isRequired,
    currentTime:  T.number.isRequired,
    playbackRate: T.number.isRequired,
    onPlay:       T.func.isRequired,
    onPause:      T.func.isRequired,
    onChangeRate: T.func.isRequired
  },
  _setPlaybackRateFn: function(rate) {
    var thiz = this; 
    return function() { 
      thiz.props.onChangeRate(rate); 
    };
  },

  render: function() {
    var playOrPauseButton = this.props.paused
              ? button({onClick: this.props.onPlay},  'Play')
              : button({onClick: this.props.onPause}, 'Pause');

    var currentTime = this.props.currentTime;
    var in_mins = Math.floor(currentTime / 60)
    var hours   = Math.floor(in_mins / 60);
    var mins    = in_mins % 60;
    var secs    = Math.floor(currentTime);

    var time = '';
    if (hours > 0) { time += hours+':'; }
    if (time.length > 0 && mins < 10) { time += '0'; }
    time += mins+':';
    if (secs < 10) { time += '0'; }
    time += secs;

    return div({},
               playOrPauseButton,
               button({onClick: this._setPlaybackRateFn(0.5)},  '50%'),
               button({onClick: this._setPlaybackRateFn(0.75)}, '75%'),
               button({onClick: this._setPlaybackRateFn(1)},    '100%'),
               button({onClick: this._setPlaybackRateFn(1.25)}, '125%'),
               button({onClick: this._setPlaybackRateFn(1.5)},  '150%'),
               button({onClick: this._setPlaybackRateFn(1.75)}, '175%'),
               button({onClick: this._setPlaybackRateFn(2)},    '200%'),
               'rate: '+this.props.playbackRate+'x, time: '+time);
  }
});