var questions = [
  { question:'How many states are in the United States?', answer: 50},
  {question:'How many continents are there?', answer: 7},
  {question:'How many legs does an insect have?', answer: 6}
];
var correctAnswers = 0;
var question;
var answer;
var response;

function print(message) {
  document.write(message);
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
  } 
}

html = "You got " + correctAnswers + " question(s) right."
print(html);
