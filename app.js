'use strict';

var BST = require('./tree');

var app = function(paragraph) {
  var words = new BST();
  var splitParagraph = paragraph.split(' ');
  var max = {count: 1, word: ''};
  for (var i = 0; i < splitParagraph.length; i++) {
    var word = splitParagraph[i];
    if (words.find(word)) {
      words.update(word);
      if (words.find(word).count > max.count) {
        max.count = words.find(word).count;
        max.word = words.find(word).data;
      }
    }
    words.insert(splitParagraph[i]);
  }
  return max;
};

module.exports = app;
