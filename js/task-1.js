const categoriesId = document.querySelector('#categories');

const categoriesItem = categoriesId.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach(categories => {
  const title = categories.querySelector('h2').textContent;
  const items = categories.querySelectorAll('ul li');
  
  console.log(`Category: ${title}`);
  console.log(`Elements: ${items.length}`);
});


const style = document.createElement("style");
style.innerHTML = `
    li {
        border: 1px solid #808080;
        border-radius: 4px;
        width: 360px;
        height: 40px;
        margin-bottom: 8px;

    }
`;
document.body.appendChild(style);