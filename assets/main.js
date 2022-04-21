var woofs = ["woof", "woof woof", "hau", "vuh vuh", "räyh"];
var thoughts = [
    "oispa nameja",
    "masurapsuja kiitos",
    "haistan hiiren"
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newWoof() { 
    var title = document.getElementById("title");
    title.innerHTML = woofs[getRandomInt(0, woofs.length - 1)];
}

function newThought() { 
    var thought = document.getElementById("thought");
    thought.innerHTML = "💭 " + thoughts[getRandomInt(0, thoughts.length - 1)];
}

newWoof();
newThought();
