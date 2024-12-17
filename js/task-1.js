const numberCategory = document.querySelector("#categories");

console.log(`Nunber of categories: ${numberCategory.children.length}`);

const categoriesAll = document.querySelectorAll(".item");

categoriesAll.forEach((category) => {
  const categoryText = category.querySelector("h2").textContent;
  const categoryNumbers = category.querySelectorAll("ul li");
  console.log(`Category: ${categoryText}`);
  console.log(`Elements: ${categoryNumbers.length}`);
});
