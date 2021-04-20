// Code your solutions in this file
const name = ["Dylan", "Amy", "Kiki"];

function writeCards(name, eventName){
    const newEvent = [];
    for(let i = 0; i < name.length; ++i){
        
        newEvent.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);

    
    }

    return newEvent;
}

function countDown(integer){
    while (integer >=0) {
        console.log(integer--);
    }
}