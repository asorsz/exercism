export class Song {
  verse(v) {
    let animal = ANIMALS[v-1];
    let verse = 
      `I know an old lady who swallowed a ${animal.name}.\n`
      + `${animal.second}`
      + `${animal.chain ? this.getChain(v-1) : ''}`
      + `${animal.last ? "I don't know why she swallowed the fly. Perhaps she'll die.\n" : '\n'}`
    return verse;
  }

  verses(a, b) {
    let verses = '';
    for (let i = a; i <= b; i++) {
      verses = verses + this.verse(i) + '\n';
    }
    return verses;
  }

  getChain(v) {
    let chain = '';
    for (let i = v; i >=1; i--) {
      let animal1 = ANIMALS[i];
      let animal2 = ANIMALS[i-1];
      chain = chain + `She swallowed the ${animal1.name} to catch the ${animal2.name}${animal2.wriggled ? ' that' + WRIGGLED : ''}.\n`
    }
    return chain
  }
}

export const WRIGGLED = ' wriggled and jiggled and tickled inside her'

export const ANIMALS = [
  {
    name: 'fly',
    second: '',
    chain: false,
    wriggled: false,
    last: true
  },
  {
    name: 'spider',
    second: `It${WRIGGLED}.\n`,
    chain: true,
    wriggled: true,
    last: true
  },
  {
    name: 'bird',
    second: 'How absurd to swallow a bird!\n',
    chain: true,
    wriggled: false,
    last: true
  },
  {
    name: 'cat',
    second: 'Imagine that, to swallow a cat!\n',
    chain: true,
    wriggled: false,
    last: true
  },
  {
    name: 'dog',
    second: 'What a hog, to swallow a dog!\n',
    chain: true,
    wriggled: false,
    last: true
  },
  {
    name: 'goat',
    second: 'Just opened her throat and swallowed a goat!\n',
    chain: true,
    wriggled: false,
    last: true
  },
  {
    name: 'cow',
    second: 'I don\'t know how she swallowed a cow!\n',
    chain: true,
    wriggled: false,
    last: true
  },
  {
    name: 'horse',
    second: 'She\'s dead, of course!',
    chain: false,
    wriggled: false,
    last: false
  }
];        

