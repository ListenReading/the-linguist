var $ = require('jquery'),
    _ = require('lodash');

var Audio = require('./components/audio.js');

// after doc loaded
$(function() {
  
  // fetch the TXT
  var fetch_txt_en = $.get('raw/en/01.txt');
  var fetch_txt_es = $.get('raw/es/01.txt');

  $.when(fetch_txt_en, fetch_txt_es).then(function(en, es) {
    var en_lines = en[0].split("\n"),
        es_lines = es[0].split("\n");
    console.log("EN result:", en_lines);
    console.log("ES result:", es_lines);
    
    // draw table
    var table = $('<table/>');
    _.zip(en_lines, es_lines).forEach(function(row) {
      console.log("row: ", row);
      var tr = $("<tr>");
      tr.append($("<td>").text(row[0]));
      tr.append($("<td>").text(row[1]));
      table.append(tr);
    });
    $("#transcript").append(table);
  });


  // export $
  window.$ = $;
});
