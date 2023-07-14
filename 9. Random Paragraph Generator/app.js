const paraText = [
  "The sun set behind the hills, casting a golden glow across the landscape. The air was crisp, and the leaves rustled gently in the breeze. It was a serene evening, perfect for reflection and contemplation.",

  "The bustling city streets were filled with people from all walks of life. Their hurried footsteps echoed against the towering buildings, creating a symphony of sounds. Each person had their own story, their own destination in mind.",

  "In the depths of the forest, a majestic waterfall cascaded down with great force. The water sparkled in the sunlight, creating a mesmerizing display of nature's power. Birds chirped and butterflies danced, adding to the enchantment of the scene.",

  "As the waves crashed against the shore, seagulls soared overhead, their cries echoing through the salty air. The sand beneath my feet was warm and soft, a comforting sensation. I closed my eyes and let the sounds of the ocean wash over me.",

  "The aroma of freshly brewed coffee filled the cozy café. The chatter of friends catching up and the clinking of cups created a vibrant atmosphere. It was a place where stories were shared, laughter was heard, and memories were made.",

  "High up in the mountains, the air was thin and crisp. The snow-covered peaks glistened under the bright sun. I stood in awe of the breathtaking view, feeling small and insignificant in the grandeur of nature.",

  "The stage was set, the lights dimmed, and anticipation filled the air. As the curtains lifted, the actors brought the story to life, captivating the audience with their talent and emotion. It was a night of enchantment and escape into a different world.",

  "The scent of blooming flowers filled the garden, attracting bees and butterflies. Each petal displayed a vibrant color, painting a picture of nature's beauty. It was a place of tranquility, where one could find solace amidst the chaos of life.",

  "The old bookstore was filled with shelves upon shelves of books, their pages holding countless stories and knowledge. The smell of aged paper and ink permeated the air, creating a nostalgic ambiance. It was a haven for book lovers, a place where time seemed to stand still.",

  "The rain fell softly outside, creating a rhythmic melody on the roof. I curled up on the couch with a warm blanket and a good book, immersing myself in a different world. It was a cozy evening, where the pitter-patter of raindrops provided the soundtrack to my solitude.",
];

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const paragraph = document.getElementById("paragraph");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

const generate = () => {
  const shuffledText=shuffleArray(paraText);
  if (input.value > 10 || input.value < 0 || isNaN(input.value)) {
    const randomIndex = Math.floor(Math.random() * paraText.length);
    paragraph.innerHTML = `
    <p>${shuffledText[randomIndex]}</p>
    `;
  } else {
    const showParaText = shuffledText.map((data) => {
      return `<p>${data}</p>`;
    });
    const showData = showParaText.slice(0, input.value).join("");
    paragraph.innerHTML = showData;
  }
};

btn.addEventListener("click", generate);
