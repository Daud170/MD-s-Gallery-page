console.log("my test");




let images = [
    {
      src: "./images/challenger.jpg",
      alt: "old challenger"  
    },
    {
        src: "./images/modern camaro.jpg",
        alt: "modern camaro"
    },
    {
        src: "./images/camaro-ss.webp",
        alt: "old camaro"
    },
    {
src: "./images/charger.avif",
        alt: "old charger"
    },
    {
        src: "./images/green-mustang.avif",
        alt: "old green mustang"

    },
    {
        src: "./images/modern-challenger.avif",
        alt: "modern challenger"
    },
    {
        src: "./images/modern-mustang.webp",
        alt: "modern msutang"
    },
    {
        src: "./images/modern-charger.webp",
        alt: "modern charger"
    }

]

const thumbnailcontainer = document.getElementById("thumbnailsContainer");
const mainBackgroundContainer = document.getElementById("backgroundImageContainer"
);



images.forEach(function(individualImage){


const myNewImg = document.createElement("img")

myNewImg.src = individualImage.src;

myNewImg.addEventListener("click", function () {

    mainBackgroundContainer.innerHTML = "";  

console.log("ive been clciked");
console.log("we have access to this:",individualImage);
const backgroundImage = document.createElement("img")
backgroundImage.src = individualImage.src
mainBackgroundContainer.appendChild(backgroundImage);
});

thumbnailcontainer.appendChild(myNewImg);
});
