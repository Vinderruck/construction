const currentWordSpan = document.getElementById("current-word");
const newWordSpan = document.getElementById("new-word");
const newWord1span=document.getElementById("new-word1");
const Submitbutton=document.getElementById("sub");
 
// Choose your desired transition interval (in milliseconds)
const transitionInterval = 5000; // Change words every 2 seconds

function changeWord() {
  const tempWord = currentWordSpan.textContent;
  currentWordSpan.textContent = newWordSpan.textContent;
  newWordSpan.textContent = newWord1span.textContent;
  newWord1span.textContent=tempWord;

  // Optionally, use opacity transition for smoother effect
  currentWordSpan.style.opacity = 0;
  setTimeout(() => {
    currentWordSpan.style.opacity = 1;
  }, 100); // Adjust opacity transition duration (ms)

  // Schedule the next change after the interval
  setTimeout(changeWord, transitionInterval);
}

// Call the changeWord function to start the animation
changeWord();
 
Submitbutton.addEventListener("click", function(){
 
  const form=document.getElementById("form")
  const name=document.getElementById("Name");
  const email=document.getElementById("Email");
  const Location=document.getElementById("Location");
  if(name.value.trim()!==""||email.value.trim()!==""||Location.value.trim()!=="") {
   form.submit()
  }
  else{
    alert("fill the fields")
  }
})
// accessing the service
function displayImage() {
  const imageContainer = document.getElementsByClassName("count");
  const images = imageContainer.querySelectorAll("img");
  images[currentImageIndex].style.display = "block"; // Show the current image

  // Set the time interval for automatic image change (in milliseconds)
  const interval = 3000; // Change image every 3 seconds

  setInterval(() => {
    slideImage("right"); // Change image to the right (can modify to "left" for left-to-right)
  }, interval);
}
a
