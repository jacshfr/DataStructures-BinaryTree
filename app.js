'use strict';

var BST = require('./tree');

var words = new BST();

var paragraph = 'Today is the first day of rest of your life.';

var init = function(paragraph, tree) {
  var splitParagraph = paragraph.split(' ');
  var max = {count: 1, name: ''};
  for (var i = 0; i < splitParagraph.length; i++) {
    var word = splitParagraph[i];
    if (tree.find(word)) {
      tree.update(word);
      if (tree.find(word).count > max.count) {
        max.count = tree.find(word).count;
        max.name = tree.find(word).data;
      }
    }
    words.insert(splitParagraph[i]);
  }
  return max;
};

console.log(init(paragraph, words));
