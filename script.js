let cat1Pic;
let newText;
let button = document.getElementById('newButton');
let firstScreen = document.getElementById('part1');
let secondScreen = document.getElementById('part2');

function changeCat (){
    cat1Pic = document.querySelector(".cat1");
    cat1Pic.src = "images/dog1.png";
}

button.addEventListener('click', function() {
    firstScreen.style.height = '0px';
    secondScreen.style.height = '100px';
})