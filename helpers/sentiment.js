module.exports = function(sentences) {
  var sentiment = require('sentiment');
  var scores = 0
  for (var i = 0; i < sentences.length; i++) {
    var sentence = sentences[i]
    var result = sentiment(sentence)
    scores += result.score
  }
  return scores / sentences.length;
};
