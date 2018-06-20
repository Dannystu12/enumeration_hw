const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function (sentence) {
  return this.alphabet.every(letter => this.phrase.toLowerCase().indexOf(letter) != -1);
}

module.exports = PangramFinder;
