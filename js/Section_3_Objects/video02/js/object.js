var person = {
  name : 'Natalie',
  country : 'US',
  age : 27,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p> Hello. My name is ' + person.name + 'and my skills are ' + person.skills + '</p>';

print(message);
