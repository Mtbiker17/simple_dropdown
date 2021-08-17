let itemTwo = document.getElementById('bannerItem2');

itemTwo.addEventListener('mouseenter', (e) => {
  document.getElementById('itemTwoContainer').style.display = 'block';
  itemTwo.addEventListener('mouseleave', () => {
    document.getElementById('itemTwoContainer').style.display = 'none';
  });
});
