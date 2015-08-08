// represents some text with a start and end time (in seconds)
function TimedText(startTime, endTime, text) {
  this.startTime = startTime;
  this.endTime   = endTime;
  this.text      = text;
}

module.exports = TimedText;