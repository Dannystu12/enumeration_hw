const AnagramFinder = function (word) {
  this.word = word;
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter(word => this.isAnagram(word));
};

AnagramFinder.prototype.isAnagram = function (otherWord){
  if(otherWord === this.word || otherWord.length != this.word.length) return false;
  const otherWordLetters = otherWord.toLowerCase().split('').sort();
  const word = this.word.toLowerCase().split('').sort();
  return otherWordLetters.every((letter, index) => word[index] === otherWordLetters[index]);
};

AnagramFinder.prototype.containsLetter = function(word , letter){
  return word.toLowerCase().indexOf(letter.toLowerCase()) !== -1;
};

module.exports = AnagramFinder;
