function makeRed() {
    document.body.style.backgroundColor = "red";
}

//Handle Blue Button Click by Setting Function name only
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//make green button Script
const greenButton = document.getElementById('make-green-button');
console.log(greenButton);
//Anonymous Function / Namelesss function
//Function name na dileo same kaj korbe so functin name dite hobe na.
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

//Handle by addEventListener Process 1
const godlenButton = document.getElementById('make-goldenrod');
godlenButton.addEventListener('click', makeGoldenRod);
function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}
//Add EventListener in different Ways process 2
const hotPinkButton = document.getElementById('make-hotpink');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})
//Add Direct ShortCut
document.getElementById('make-lightblue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})