
function createHeart() {
    let heart = document.createElement('div');

     heart.innerText = "❤️ "
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    
    heart.style.animationDuration = Math.random() *  2 + 3 +"s";

    document.body.appendChild(heart);

    setTimeout( () => {
        heart.remove();
    },3000);
}

setInterval(createHeart, 300);