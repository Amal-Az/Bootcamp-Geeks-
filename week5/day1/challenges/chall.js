function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    // Vérifier que tous les éléments sont des chaînes
    const allStrings = words.every(word => typeof word === 'string');
    if (allStrings) {
      // Transformer tous les mots en majuscules
      const uppercased = words.map(word => word.toUpperCase());
      resolve(uppercased);
    } else {
      reject("Error: Not all items are strings");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      const sorted = words.sort();
      resolve(sorted);
    } else {
      reject("Error: Array length is less than or equal to 4");
    }
  });
}

// Tests
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error)); // Rejeté

makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error)); // Rejeté (array length ≤ 4)

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result)) // ["APPLE","BANANA","KIWI","MELON","PEAR"]
  .catch(error => console.log(error));




  const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseObj = JSON.parse(morse);
      if (Object.keys(morseObj).length === 0) {
        reject("Error: Morse object is empty");
      } else {
        resolve(morseObj);
      }
    } catch (error) {
      reject("Error parsing Morse JSON");
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const input = prompt("Enter a word or sentence to translate to Morse:");
    if (!input) {
      reject("Error: No input provided");
      return;
    }

    // Convertir en minuscules pour correspondre aux clés de morseJS
    const letters = input.toLowerCase().split("");
    const translation = [];

    for (const letter of letters) {
      if (letter === " ") {
        // On peut choisir d'ignorer ou ajouter un séparateur (ex: une barre ou rien)
        continue; // Ignorer espace
      }
      if (!morseJS[letter]) {
        reject(`Error: Character "${letter}" not found in Morse code`);
        return;
      }
      translation.push(morseJS[letter]);
    }
    resolve(translation);
  });
}

function joinWords(morseTranslation) {
  // Afficher dans la page (DOM) chaque code Morse sur une ligne
  const container = document.createElement("div");
  container.style.whiteSpace = "pre-line"; // Garde les sauts de ligne

  container.textContent = morseTranslation.join("\n");
  document.body.appendChild(container);
}

// Chaînage des fonctions
toJs()
  .then(morseObj => toMorse(morseObj))
  .then(morseTranslation => {
    joinWords(morseTranslation);
  })
  .catch(error => alert(error));
