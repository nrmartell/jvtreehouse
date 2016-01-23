var playList = [
 ['Dopamine', 'Diiv'],
 ['Salad Days', 'Mac Demarco'],
 ['Myth', 'Beach House'],
 ['Rapt', 'Karen O'],
 ['Stella Was Diver', 'Interpol'],
 ['Dear God', 'Monsters of Folk']
];

function print(message) {
  document.write(message);
}

function printSongs( songs ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + ' by '+ songs[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playList);





















