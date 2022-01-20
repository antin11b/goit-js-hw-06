const allCategoriesEl = document.querySelectorAll('#categories li.item');

console.log(`Number of categories: ${allCategoriesEl.length}`);

allCategoriesEl.forEach((category) => {
    console.log(`\nCategory: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.children[1].childElementCount}`);
});