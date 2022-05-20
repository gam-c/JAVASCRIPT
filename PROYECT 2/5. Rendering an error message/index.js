// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".


let error__para = document.getElementById("error")

function btn() {
    error__para.textContent = "Something went wrong, please try again"
}