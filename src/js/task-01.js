const ulCategories = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${ulCategories.length}`);

ulCategories.forEach(function (list) {
    console.log(`Category: ${list.firstElementChild.textContent}`);
    console.dir(`Elements: ${list.lastElementChild.children.length}`);
});
