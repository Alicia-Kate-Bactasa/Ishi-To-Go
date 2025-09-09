const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', () => {
  playBtn.style.display = 'none';
  maze.style.display = 'flex';
  generateBubbles();
});

document.addEventListener("DOMContentLoaded", function() {
  const welcomeHeader = document.getElementById("welcomeHeader");
  if (welcomeHeader) {
    const welcomeText = "Welcome..!";
    let j = 0;
    function typeWelcome() {
      if (j < welcomeText.length) {
        welcomeHeader.innerHTML += welcomeText[j];
        j++;
        setTimeout(typeWelcome, 55);
      }
    }
    welcomeHeader.innerHTML = ""; 
    typeWelcome();
  }
});