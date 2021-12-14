const random_num = (num) => {
    return Math.floor(Math.random () *  num)
}

const random_message = {
    funny : ['dunky','goody','chet','crazzy','younky'],
    goodNews : ['good day','good morning','good man ','good friend'],
    news : ['good job','oh tanks','your are very son','you is my bro']
}


let allmessage=[]

for (let word in random_message){
    const numForRandom =random_num(random_message[word].length);
    if (word==='funny'){
        allmessage.push(`your sign is ${random_message[word][numForRandom]}`)
    } else if (word==='goodNews'){
        allmessage.push(`your are ver lucky ${random_message[word][numForRandom]}`)
    } else if (word==='news'){
        allmessage.push(`today is very ${random_message[word][numForRandom]}`)
    } else {
        allmessage.push('An Error to work Pleas Enter to another times')
    }
}
const formatAllmessage=(argu) => {
    const formatted=argu.join(',\n')
    console.log(formatted);
}

formatAllmessage(allmessage);
