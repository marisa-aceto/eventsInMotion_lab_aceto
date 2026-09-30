let cat1Pic;
let frog1Pic;
let newText;
let keyd = 0;
let button = document.getElementById('newButton');
let firstScreen = document.getElementById('part1');
let secondScreen = document.getElementById('part2');

function changeCat (){
    cat1Pic = document.querySelector(".cat1");
    cat1Pic.src = "images/dog1.png";
    alert("The dog got his house back!");
}

button.addEventListener('click', function() {
    firstScreen.style.height = '0px';
    secondScreen.style.height = '100vh';
})

window.addEventListener('keydown', (event) => {
     if (event.key === 'ArrowUp') {
        keyd += 45;
         frog1Pic = document.getElementById('frog1');
         frog1Pic.style.transform = `rotate(${keyd}deg)`;
     }
     if (keyd == 180) {
    window.open("https://www.pbs.org/wnet/nature/blog/frog-fact-sheet/");
     }
});
