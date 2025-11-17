// A list of all possible characters in a hex code
const hexChars = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F'
];

// Get the button and the color display element from the HTML
const btn = document.getElementById('flip-btn');
const colorDisplay = document.querySelector('.color');

// Add a "click" event listener to the button
btn.addEventListener('click', function() {
    // This code runs every time the button is clicked

    let hexColor = '#'; // Start with the hash symbol

    // Loop 6 times to get 6 hex characters
    for (let i = 0; i < 6; i++) {
        // Get a random number between 0 and 15 (index for hexChars)
        const randomIndex = Math.floor(Math.random() * hexChars.length);
        
        // Add the random character to our hex code
        hexColor += hexChars[randomIndex];
    }

    // Update the background color of the entire page
    document.body.style.backgroundColor = hexColor;

    // Update the text to show the new color code
    colorDisplay.textContent = hexColor;
});     