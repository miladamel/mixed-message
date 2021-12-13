let userName ='';
// empyty let
userName ?console.log(`Hello ${userName}`) : console.log('Hello');
// conditaion single line
const userQuestion ='Will I become a werewolf tonight?';
//const userQuestion
console.log(userQuestion);
//print userQuestion
const randomNumber=Math.floor(Math.random() * 8 );
// creat random number
let eightBall='';
//eightBall empty
switch (randomNumber){
  //swtich case for eightBall
    case 1 :
      console.log('It is certain');
      break;
      //case 1
    case 2 :
      eightBall='It is decidedly so';
      break;
      //case 2
    case 3 :
      eightBall='Reply hazy try again';
      break;
      //case 3
    case 4 :
      eightBall='Cannot predict now';
      break;
      //case 4
   case 5 :
      eightBall='Do not count on it';
      break;
      //case 5
    case 6 :
      eightBall='My sources on it';
      break;
      // case 6 
    case 7 :
      eightBall='Outlook not so good';
      break;
    //case 7
    case 8 :
      eightBall='Signs point to yes';
      break;
}
console.log(`the 8 Ball answerd  :${eightBall}`);
