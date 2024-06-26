$('[data-tilt]').tilt({
  maxTilt: 10, // Adjust max tilt angle as needed
  perspective: 1000, // Adjust perspective as needed
  easing: "cubic-bezier(.03,.98,.52,.99)", // Adjust easing function as needed
  option: "value" // Adjust option as needed
});


// Function to handle mouse movement for each card
function handleMouseMove(cardId, e) {
  const rect = document.getElementById(cardId).getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
  document.getElementById(cardId).style.setProperty("--mouse-x", `${x}px`)
  document.getElementById(cardId).style.setProperty("--mouse-y", `${y}px`)    

}

// Assigning mousemove event listeners for each card
document.getElementById('card1').onmousemove = e => handleMouseMove('card1', e);
document.getElementById('card2').onmousemove = e => handleMouseMove('card2', e);
document.getElementById('card3').onmousemove = e => handleMouseMove('card3', e);
document.getElementById('card4').onmousemove = e => handleMouseMove('card4', e);
document.getElementById('card5').onmousemove = e => handleMouseMove('card5', e);
document.getElementById('card6').onmousemove = e => handleMouseMove('card6', e);
document.getElementById('card7').onmousemove = e => handleMouseMove('card7', e);