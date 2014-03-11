$ = require('jquery')
_ = require('lodash')

Audio = require('./components/audio')

# after doc loaded
$ ->
  
  # fetch the TXT
  fetch_txt_en = $.get('raw/en/01.txt');
  fetch_txt_es = $.get('raw/es/01.txt');

  $.when(fetch_txt_en, fetch_txt_es).then (en, es) ->
    en_lines = en[0].split("\n")
    es_lines = es[0].split("\n")
    
    # draw table
    table = $('<table/>');
    _.zip(en_lines, es_lines).forEach (row) ->
      tr = $("<tr>")
      tr.append($("<td>").text(row[0]))
      tr.append($("<td>").text(row[1]))
      table.append(tr)
    $("#transcript").append(table)

  # export $
  window.$ = $