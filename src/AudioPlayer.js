function AudioPlayer(src) {
  this.audio     = new Audio();
  this.audio.src = src;
}

AudioPlayer.prototype = {
  shutdown: function() { this.audio.load(null); },

  isPaused:        function() { return this.audio.paused;        },
  getCurrentTime:  function() { return this.audio.currentTime;   },
  getPlaybackRate: function() { return this.audio.playbackRate;  },

  play:  function() { this.audio.play();  },
  pause: function() { this.audio.pause(); },
  changeRate: function(rate) {
    var thiz = this; 
    this._pausingAndResuming(function() { 
      thiz.audio.playbackRate = rate; 
    })
  },
  _pausingAndResuming: function(fn) {
    if (this.audio.paused) {
      fn();
    } else {
      this.pause();
      fn();
      this.play();
    }
  }
};
module.exports = AudioPlayer;