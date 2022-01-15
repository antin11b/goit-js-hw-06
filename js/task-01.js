const allCategoriesEl = document.querySelectorAll('ul#categories li.item');

console.log(`Number of categories: ${allCategoriesEl.length}`);

const categoryEl = allCategoriesEl.forEach((category) => {
    console.log(`\nCategory: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`);
});