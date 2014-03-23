function AudioPlayer(src) {
  this.audio     = new Audio();
  this.audio.src = src;
}

AudioPlayer.prototype.stop = function() {
  this.audio.load(null);
}

AudioPlayer.prototype.isPaused        = function() { return this.audio.paused;        }
AudioPlayer.prototype.getCurrentTime  = function() { return this.audio.currentTime;   }
AudioPlayer.prototype.getPlaybackRate = function() { return this.audio.playbackRate;  }

AudioPlayer.prototype.play  = function() { this.audio.play();  }
AudioPlayer.prototype.pause = function() { this.audio.pause(); }
AudioPlayer.prototype.changeRate = function(rate) {
  var thiz = this; 
  this._pausingAndResuming(function() { 
    thiz.audio.playbackRate = rate; 
  })
}
AudioPlayer.prototype._pausingAndResuming = function(fn) {
  if (this.audio.paused) {
    fn();
  } else {
    this.pause();
    fn();
    this.play();
  }
}

module.exports = AudioPlayer;