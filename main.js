var images = [
  "images/section1/9.jpg",
  "images/section1/1.jpg",
  "images/section1/2.jpg",
  "images/section1/3.jpg",
  "images/section1/4.jpg",
  "images/section1/6.jpg",
  "images/section1/10.jpg",
]

var imageHead = document.getElementById("section1");

var i = 0;
setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 12000);