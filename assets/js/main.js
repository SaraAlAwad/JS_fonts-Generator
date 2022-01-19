let text = document.getElementById("userText");
let result = document.getElementById("result");
let fFamily = document.getElementById("font");
let fsize = document.getElementById("fsize");
function changeFontsSize() {
    result.innerHTML = text.value;

    // ++++++ font families +++++++
    if (fFamily.value == "Bodoni Moda, serif") {
        result.style.fontFamily = "Bodoni Moda, serif";
    }
    else if (fFamily.value == "Open Sans, sans-serif") {
        result.style.fontFamily = "Open Sans, sans-serif";
    }
    else if (fFamily.value == "Roboto, sans-serif") {
        result.style.fontFamily = "Roboto, sans-serif";
    }
    else if (fFamily.value == "Yusei Magic, sans-serif") {
        result.style.fontFamily = "Yusei Magic, sans-serif";
    }
    // +++++ range & font size +++++
    if (fsize.value == "1") {
        result.style.fontSize = "10px";
    }
    else if (fsize.value == "2") {

        result.style.fontSize = "16px";
    }
    else if (fsize.value == "3") {

        result.style.fontSize = "32px";
    }
    else if (fsize.value == "4") {

        result.style.fontSize = "64px";
    }
}
