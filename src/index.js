let itemTwo = document.getElementById('bannerItem2');
let itemTwoContainer = document.getElementById('itemTwoContainer');
itemTwo.addEventListener('mouseover', () => {
  itemTwoContainer.classList.toggle('show');
  console.log('worked');
});
