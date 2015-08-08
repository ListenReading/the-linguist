# imports
$     = require('jquery')
_     = require('lodash')
React = require('react');
# react components
PlayerWithControls = require('./components/PlayerWithControls')
#classes
AudioPlayer = require('./AudioPlayer')
LoadText    = require('./util/LoadText')


# after doc loaded
$ ->
  
  # setup player
  # TODO: use popcorn.js player instead...
  audioPlayer = new AudioPlayer('raw/en/01.mp3');
  React.renderComponent(PlayerWithControls({audioPlayer:audioPlayer}), document.getElementById('player'));

  # fetch the TXT
  fetch_txt_en = $.get('sentence_aligned/en/01.txt');
  fetch_txt_es = $.get('sentence_aligned/es/01.txt');

  $.when(fetch_txt_en, fetch_txt_es).then (en, es) ->
    en_lines = en[0].split("\n")
    es_lines = es[0].split("\n")

    # make 'csv' from two text files
    csv = _.zip(es_lines, en_lines)
    
    # draw table
    # table = $('<table/>');
    # _(csv).forEach (row) ->
    #   tr = $("<tr>")
    #   tr.append($("<td>").text(row[0]+" ").addClass("l2"))
    #   tr.append($("<td>").text(row[1]+" ").addClass("l1"))
    #   table.append(tr)
    # $("#transcript").append(table)
    
    # draw sentence pairs
    a = $('<article/>')
    _(csv).forEach (row) ->
      pair = $("<div/>").addClass("sentencePair")
      playButton = $("<span>").html("&nbsp;")
      if row[0].trim().length > 0
        playButton = $("<button/>")
        playButton.html("&#x1f50a;")
        playButton.click(-> responsiveVoice.speak(row[0], "Spanish Female"))   # Spanish Latin American Female
      pair.append($("<div>").text(row[0]+" ").addClass("l2").append(playButton))
          .append($("<div>").text(row[1]+" ").addClass("l1"))
      a.append(pair)
    $("#transcript").append(a)

  # export $
  window.$ = $