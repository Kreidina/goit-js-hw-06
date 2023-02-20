const itemLength = document.querySelectorAll('.item');

console.log('Number of categories:', itemLength.length);

itemLength.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryElementsCount = item.querySelectorAll('li').length;
  console.log('Category:', categoryName);
  console.log('Elements:', categoryElementsCount)
});
