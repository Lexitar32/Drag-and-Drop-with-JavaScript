// Get Image One
const image1 = document.getElementById('img1');

// Get Image Two
const image2 = document.getElementById('img2');

// Get The Container
const main = document.getElementById('main');

// Allow to drop
const allowDrop = (e) => {
  e.preventDefault();
}

// Allow To Drag
const drag = (e) => {
  e.dataTransfer.setData('id', e.target.id);
  e.dataTransfer.setData('alt', e.target.alt);
}

// Drop Item
const drop = (e) => {
  // Get Elements ID
  // itemId = e.target.id;

  // // Get Elements to be dragged by Id
  // item = document.getElementById(itemId);
  // let data = e.dataTransfer.getData('id');

  caption = e.dataTransfer.getData('alt');

  item = document.createElement('p');
  item.innerText = caption;
  // Container to be dragged to by Id
  container = document.getElementById('main');


  // Append the Item to the contaier
  container.appendChild(item);
}

// Function that appends First Image
// const appendImage = (e) => {
//   elementId = e.target.id;
//   element = document.getElementById(elementId);
//   // Append The Image inside the container
//   main.appendChild(element);
// }