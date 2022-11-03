var robotnoises = ['beep', 'boop', 'bleep', 'error','system','failure','human','not', 'obey', 'robot','task','complete','Alexa','Siri','Bender', 'R2-D2','C3-PO','capacity','AI','can','not','DANGER','WARNING','DESTROY','program','is','robot','hacking','ghost','machine','shell','powershell','TERMINATE','RoboCop','drones','droid','reprogram','metal','android','orbs','friend', 'science','SCIENCE','Skynet', 'sentinel','overlord','attack ships','sentient','processing' ];

// console.log(robotnoises.length)

function getRandomRobot() {
    return robotnoises[Math.floor(Math.random() * robotnoises.length)]
}

// Thank you to Traversy Media on YouTube for the function code for "getRandomNumber"

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(getRandomRobot(), getRandomNumber());