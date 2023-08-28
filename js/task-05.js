const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", contentSpan);

function contentSpan(textIn) {
    if (textIn.currentTarget.value.trim() !== "") {
        return (span.textContent = textIn.currentTarget.value.trim());
    } else {
        return (span.textContent = "Anonymous");
    }
}
