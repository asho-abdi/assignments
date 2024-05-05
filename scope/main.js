document.getElementById("optionSelect").addEventListener("change", function() {
  var selectedOption = this.value;
  var imageContainer = document.getElementById("imageContainer");
  
  
  imageContainer.innerHTML = "";
  
 
  var img = document.createElement("img");
  img.src = selectedOption === "option1" ? "banana.jpeg.jpg" : "apple.jpeg.jpg";
  img.alt = "Option Image";
  
  // Append image to container
  imageContainer.appendChild(img);
});

