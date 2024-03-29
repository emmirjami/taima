var woofs = ["woof", "woof woof", "hau", "vuh vuh", "räyh"];
var thoughts = [
    "oispa nameja",
    "masurapsuja kiitos",
    "haistan hiiren"
];

var scratchThoughts = [
    "hih, kutittaa",
    "lisää, lisää!",
    "hyviä rapsuja"
];

var treatThoughts = [
    "nam, herkkua",
    "ottaisin toisen",
    "rouskis"
];

var playThoughts = [
    "iiik t. tipu",
    "voisitko heittää tätä?",
    "grrr, grrr"
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

function newThought(clickThought) {
    var thought = clickThought;

    if (!thought) {
        thought = thoughts[getRandomInt(0, thoughts.length - 1)];
    }

    var thoughtBox = document.getElementById("thought");
    thoughtBox.innerHTML = "💭 " + thought;
}

function switchImage(imageName) {
    var image = document.getElementById("picture");
    image.src = "/assets/images/" + imageName + ".jpg";
}

function scratchButtonClicked() {
    var thought = scratchThoughts[getRandomInt(0, scratchThoughts.length - 1)];
    newThought(thought);
    switchImage("scratch");
}

function treatButtonClicked() {
    var thought = treatThoughts[getRandomInt(0, treatThoughts.length - 1)];
    newThought(thought);
    switchImage("treat");
}

function playButtonClicked() {
    var thought = playThoughts[getRandomInt(0, playThoughts.length - 1)];
    newThought(thought);
    switchImage("play");
}

newWoof();
newThought();
