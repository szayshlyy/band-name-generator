'use strict';

function postMessage (word, wordObject) {
  if (wordObject.hasOwnProperty(word)) {
    return {msg: 'The word ' + word + ', has already been added. Try another adjective!'};
  }

  wordObject[word] = true;
  console.dir(wordObject);
  return {msg: word + ' is a great word!'};
};

module.exports = postMessage;
