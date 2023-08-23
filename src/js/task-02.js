const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
// function nameL(arr) {
//     const li = arr.map((liName) => `<li class='item'>${liName}</li>`).join("");
//     list.insertAdjacentHTML("beforeend", li);
// }
// nameL(ingredients);
const list = document.querySelector("#ingredients");
const listElemants = ingredients.map((element) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.textContent = element;
    return li;
});

list.append(...listElemants);
