var sentiment = require('sentiment');
var Tokenizer = require('sentence-tokenizer');
var tokenizer = new Tokenizer('Chuck');
// var paragraph = "I come to 1 game a year from the Portland area. The stadium leaves a lot to be desired. It's pretty run down and lacks amenities. The fans are awesome and that makes it worth the trip but getting out of the stadium is a pain and it's in the middle of a pretty rough area. I'll keep coming back though."
var paragraph = "I hate it. I don't hate it. It leaves a lot to be improved"
tokenizer.setEntry(paragraph)

var sentences = tokenizer.getSentences()

var scores = 0
for (var i = 0; i < sentences.length; i++) {
  var sentence = sentences[i]
  var result = sentiment(sentence)
  console.log(sentence);
  console.log(result);
  scores += result.score
}
console.log('normalize: ' + scores / sentences.length);
