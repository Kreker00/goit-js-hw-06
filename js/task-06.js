const inp = document.querySelector("#validation-input");
inp.addEventListener("blur", (element) => {
    if (element.currentTarget.value.trim().length == inp.dataset.length) {
        inp.classList.add("valid");
        inp.classList.remove("invalid");
    } else {
        inp.classList.add("invalid");
        inp.classList.remove("valid");
    }
});
