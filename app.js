var title = document.title;
var counter = 0;
function writetitle() {
    document.title = title.substring(0, counter);

    if (c == title.length) {
        counter = 0;
        setTimeout("writetitle()", 100);
    } else {
        counter++;
        setTimeout("writetitle()", 300);
    }
}
writetitle();



window.addEventListener("blur", () => {
    document.title = "";
    document.title = "Geri Dön:(";
});
window.addEventListener("focus", () => {
    document.title = "";
    document.title = "Title Work :)";
})