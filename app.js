const imageData = [
  {
    imageName: "crow",
    imageSrc: "./images/crow-medium.jpg",
    imageAlt:
      "A crow standing on a pipe facing away from the camera, illuminated by a vibrant orange background. Photo taken by Zoha Gohar, taken from unsplash.com",
  },
  {
    imageName: "flamingo",
    imageSrc: "./images/flamingo-medium.jpg",
    imageAlt:
      "A white flamingo drinking from a large body of water, its form being reflected in the rippling water. Photo taken by Philippe BONTEMPS, taken from unsplash.com",
  },
  {
    imageName: "mushrooms",
    imageSrc: "./images/mushrooms-medium.jpg",
    imageAlt:
      "Two white mushrooms sprouting from the dirt in the daylight. Photo taken by Marco Grosso, taken from unsplash.com",
  },
  {
    imageName: "sparrow",
    imageSrc: "./images/sparrow-medium.jpg",
    imageAlt:
      "A sparrow sitting atop a reed in the winter. Photo taken by Tao Yuan, taken from unsplash.com",
  },
  {
    imageName: "kangaroo",
    imageSrc: "./images/kangaroo-medium.jpg",
    imageAlt:
      "A kangaroo looking at the camera in an Australian field during the day. Photo taken by Brian McMahon', taken from unsplash.com",
  },
];

function createDefaultDisplay() {
  const display = document.getElementById("display");
  const fullImage = document.createElement("img");
  fullImage.src = imageData[0].imageSrc;
  fullImage.alt = imageData[0].imageAlt;
  fullImage.className = imageData[0].imageName;
  display.appendChild(fullImage);
}

function createThumbnail() {
  const thumbnailContainer = document.getElementById("thumbnail-container");
  for (let i = 0; i < imageData.length; i++) {
    const image = document.createElement("img");
    image.src = imageData[i].imageSrc;
    image.alt = imageData[i].imageAlt;
    image.className = "thumbnail";
    image.addEventListener("click", function () {
      createFullImage(i);
    });
    thumbnailContainer.appendChild(image);
  }
}

function createFullImage(iValue) {
  const display = document.getElementById("display");
  display.innerHTML = "";
  const fullImage = document.createElement("img");
  fullImage.src = imageData[iValue].imageSrc;
  fullImage.alt = imageData[iValue].imageAlt;
  fullImage.className = imageData[iValue].imageName;
  display.appendChild(fullImage);
}

createThumbnail();
createDefaultDisplay();

const thumbnailContainerButton = document.getElementById(
  "thumbnailContainerButton"
);

//function showHideThumbnails() {
//const thumbnailContainer = document.getElementById("thumbnailContainer");
//let display = 0;
//if (display == 1) {
//thumbnailContainer.style.display = "flex";
//display = 0;
//} else {
//thumbnailContainer.style.display = "none";
//thumbnailContainer.style.padding = "0px";
//display = 1;
//}
//}
//Tried to have a show/hide button, but could not get button to work, always had an error
