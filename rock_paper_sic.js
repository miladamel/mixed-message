const getUserChoise = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput ==='rock' || userInput === 'paper' || userInput ==='scissors' ){
      return userInput;
    } else {
      console.log('Error !');
    }
}
// console.log(getUserChoise('paper'));
// console.log(getUserChoise('fork'));
const getComputerChoise = () => {
  let randomNumber= Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0 :
      return 'paper';
    case 1 :
      return 'rock';
    case 2 :
      return 'scissors';
  }
}
 // console.log(getComputerChoise());
 function determineWinner(userChoise,computerChoise){
    if (userChoise === computerChoise){
      return 'This game is a tie !';
    }
  //for tie beetwen player
    if (userChoise === 'rock') {
      if (computerChoise === 'paper') {
        return 'The computer won!';
      } else {
           return 'You win!';
     }
    }
       // for win about rock and paper
    if (userChoise === 'scissors'){
      if(computerChoise ==='rock'){
        return 'The Computer is Win !!!';
  } else {
          return  'Your Win !!!';
      }
    }
    if (userChoise ==='paper'){
      if(computerChoise==='scissors'){
        return 'This is win computer';
      } else {
        return 'Good You are Win';
      }
    }
 }
    // for win about scissors and rock
// console.log(determineWinner("scissors","paper"));
// console.log(determineWinner('paper','rock'));
const playGame = () => {
  const userChoise = getUserChoise('scissors');
  const computerChoise = getComputerChoise();
  console.log('You threw :  '+ userChoise);
  console.log('The Computer threw : ' + computerChoise);
  console.log(determineWinner(userChoise,computerChoise));
}
playGame();

