var showImg = 1;
document.getElementById(showImg).className = "thumbnail";

function show(img) {
    document.getElementById(showImg).className = "thumbnail";
    img.className = "thumbnail selected";
    document.getElementById(0).src = img.src;
    showImg = img.id
}