function funky() {
  var button = document.getElementsByClassName("btn");
  var button = prompt('What is the title?', 'James and the Giant Peach');
  var h1 = document.createElement('h1');
  var h1Text = document.createTextNode(button);
  h1.appendChild(h1Text);
  document.body.appendChild(h1).style.textAlign = "center";

  var doneToday = prompt("Write a few sentences about what you did today", "Ran into oncoming traffic, jumped out of a burning building....");
  var pTag = document.createElement('p');
  var pTagText = document.createTextNode(doneToday);
  pTag.appendChild(pTagText);
  document.body.appendChild(pTag).style.textAlign = "justify".style.backgroundColor = "userColor";

  var userColor = prompt("What's your favorite color?", "Red, Blue, Green, Yellow...?");

};
