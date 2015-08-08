var csv = require('csv');
var expect = require('chai').expect;

describe("CSV Parsing", function() {
  it("should parse CSV with newline in text", function(done) {
    csv()
    .from.string('"1\na","2","3","4"\n"a","b","c","d"')
    .to.array(function(data){ 
      expect(data).to.deep.equal([ [ '1\na', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ]);
      done();
    });
  });
});