// Task: Implement isNameInList function

var names = [
  'jax',
  'tryndamere',
  'anivia',
  'ahri'
]

function isNameInList (names) {
  if (names !== 0){
    console.log('yes it is')
  } else {
    console.log('no its not')
    throw new Error('isNameInList function not implemented');
  }

}

console.log('Is Pikachu a league of legends champion? ', isNameInList('pikachu'));
