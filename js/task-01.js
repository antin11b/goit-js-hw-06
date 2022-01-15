const allCategoriesEl = document.querySelectorAll("ul#categories li.item");

console.log(`Number of categories: ${allCategoriesEl.length}`);
console.log(``);

const categoryEl = allCategoriesEl.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`);
    console.log(``);
});