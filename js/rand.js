const key = ['Unlock a world of games! Or make your own?','Do you know who is Glitched?','Do you read this?','Helpful?','Are you a Trusted User?','No?','Yes?','Can you finish quest?','Who is creator of Fancade?','Are you a Fanmod?','What is Mekorama?','Who is Martin magni?','Any Featured Game?','Whats the first published game in Fancade?','Whats the first game to hit 1M plays in Fancade?'];

function randomize() { 
  out = '';
  out = out.concat(key[Math.floor(Math.random() * key.length)]).concat('');
  document.getElementById("mail").innerHTML = out;
}
