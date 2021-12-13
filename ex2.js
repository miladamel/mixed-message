let raceNumber = Math.floor(Math.random() * 1000);
//console.log(raceNumber);
//creat number for random
const registeredEarly =true;
//creat bool var
const age=18;
// creat const age
if (age > 18 && registeredEarly === true){
  raceNumber += 1000;
}
if (age > 18 && registeredEarly === true){
  console.log(`your Race at 9:30 am and RaceNumber ${raceNumber}`);
} else if (age > 18 && registeredEarly ===false){
  console.log(`your Ract start at 11:00 am and Your RaceNumber ${raceNumber}`)
} else if(age < 18 ){
  console.log(`Your Race start at 12:30 am and Your RaceNumber  ${raceNumber}`);
} else {
  console.log('Plaes Go Your Desk register and Strart');
}
//console.log(raceNumber);
