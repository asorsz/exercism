export class House {
  static verse(v) {
    let i = v - 1;
    let firstItem = ITEMS[i];
    let verse = [`This is the ${firstItem.name}`];
    for (i; i > 0 ; i--) {
      let item = ITEMS[i];
      let nextItem = ITEMS[i-1]
      verse.push(`that ${item.did} the ${nextItem.name}`)
    }
    return verse
  }

  static verses(a, b) {
    let verses = [];
    for (let i = a; i <=b; i++) {
      verses.push(...this.verse(i))
      if (i !== b) verses.push('');
    }
    return verses;
  }
}

export const ITEMS = [
  {name: 'house that Jack built.', did: ''},
  {name: 'malt', did: 'lay in'},
  {name: 'rat', did: 'ate'},
  {name: 'cat', did: 'killed'},
  {name: 'dog', did: 'worried'},
  {name: 'cow with the crumpled horn', did: 'tossed'},
  {name: 'maiden all forlorn', did: 'milked'},
  {name: 'man all tattered and torn', did: 'kissed'},
  {name: 'priest all shaven and shorn', did: 'married'},
  {name: 'rooster that crowed in the morn', did: 'woke'},
  {name: 'farmer sowing his corn', did: 'kept'},
  {name: 'horse and the hound and the horn', did: 'belonged to'},
];
