const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const galleryList = document.querySelector(".gallery");

const elements = images.map(image => {
  const listItem = document.createElement("li");
  listItem.classList.add("task2-list-item");
  
  const itemImage = document.createElement("img");
  itemImage.src = image.url;
  itemImage.alt = image.alt;
  listItem.append(itemImage);
  return listItem;
});

galleryList.append(...elements);

// Варіант вирішення з використанням .createDocumentFragment();
// #region
// const galleryList = document.querySelector(".gallery");
// const fragment = document.createDocumentFragment(); // Create a document fragment to store the elements

// images.forEach(image => {
//     const listItem = document.createElement("li");
//     listItem.classList.add("task2-list-item");

//     const itemImage = document.createElement("img");
//     itemImage.src = image.url;
//     itemImage.alt = image.alt;

//     listItem.appendChild(itemImage);
//     fragment.appendChild(listItem); // Append the list item to the fragment
// });

// galleryList.appendChild(fragment); // Append the fragment containing all list items to the gallery at once
// #endregion