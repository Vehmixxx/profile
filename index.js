//modal variables
var modal = document.getElementById("modal-for-image");
var modalImg = document.getElementById("myImage");
var closeBtn = document.getElementById("close");

//gets all images + adds clickFunc to each
for (var i = 1; i <= 10; i++) {
    var image = document.getElementById(`image-${i}`);
    if (image) {
        image.addEventListener("click", clickFunc);
    }
}

//when clicked, modal does things
function clickFunc() {
    console.log("image clicked!")
    modal.style.display = "flex";
    modal.style.opacity = "1";
    modal.style.animation = "fadein 1s ease";
    modalImg.style.animation = "scaleUp 1s ease";
    modalImg.style.width = "900px";
    modalImg.src = this.src;
}

//closes modal
closeBtn.addEventListener("click", function() {
    modal.style.animation = "fadeout 1s ease"
    modal.style.opacity = "0";
    modal.style.display = "none";
});

