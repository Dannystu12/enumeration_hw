const AnagramFinder = function (word) {
  this.word = word;
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter(word => this.isAnagram(word));
};

AnagramFinder.prototype.isAnagram = function (otherWord){
  if(otherWord === this.word || otherWord.length != this.word.length) return false;
  otherWordLetters = otherWord.toLowerCase().split('');
  return otherWordLetters.every(letter => this.containsLetter(letter));
};

AnagramFinder.prototype.containsLetter = function(letter){
  return this.word.toLowerCase().indexOf(letter.toLowerCase()) !== -1;
};

module.exports = AnagramFinder;
