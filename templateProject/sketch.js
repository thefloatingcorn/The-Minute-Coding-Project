function setup() {
  noCanvas();

  let button = select('#submit');
  let user_text = select('#user_text');
  let output = select('#output');

  user_text.input(echoFeed);
  button.mousePressed(newNote);

  function echoFeed() {
    output.html(user_text.value());
  }
  
  function newNote(){
	  createP(user_text.value());
  }

}
