// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const wordsToType = ['Word1', 'Word2', 'Word3'];
const container = document.getElementById('typing-container');

function typeAndDeleteWords(wordIndex = 0) {
  const currentWord = wordsToType[wordIndex];
  let charIndex = 0;

  function typeCharacter() {
    if (charIndex < currentWord.length) {
      container.textContent += currentWord[charIndex];
      charIndex++;
      setTimeout(typeCharacter, 100); // Adjust the delay as needed
    } else {
      setTimeout(deleteCharacters, 1000); // Adjust the delay before starting deletion
    }
  }

  function deleteCharacters() {
    if (charIndex >= 0) {
      const newText = currentWord.substring(0, charIndex);
      container.textContent = newText;
      charIndex--;
      setTimeout(deleteCharacters, 50); // Adjust the delay as needed
    } else {
      container.textContent = '';
      setTimeout(() => {
        const nextWordIndex = (wordIndex + 1) % wordsToType.length;
        typeAndDeleteWords(nextWordIndex); // Move to the next word
      }, 500); // Adjust the delay before moving to the next word
    }
  }

  // Start typing the current word
  typeCharacter();
}

// Call the typing and deletion function with the first word
typeAndDeleteWords();