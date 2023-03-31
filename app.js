//1)
var title = document.title;
var counter = 0;
function writetitle() {
    document.title = title.substring(0, counter);

    if (counter == title.length) {
        counter = 0;
        setTimeout("writetitle()", 500);
    } else {
        counter++;
        setTimeout("writetitle()", 500);
    }
}
writetitle();

//1 ve 2 ayrı ayrı şeylerdir birini denerken diğerini yorum satırına al


//2)
window.addEventListener("blur", () => {
    document.title = "";
    document.title = "Geri Dön :(";
});


window.addEventListener("focus", () => {
    document.title = "";
    document.title = "Title Work :)";
})
