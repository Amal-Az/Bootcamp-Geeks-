const fs = require('fs');

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data;
  } catch (err) {
    console.error(`Erreur de lecture du fichier ${filePath} :`, err.message);
    return null;
  }
}

// Écrire dans le fichier en remplaçant son contenu 
function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Contenu écrit dans ${filePath}`);
  } catch (err) {
    console.error(`Erreur d'écriture dans ${filePath} :`, err.message);
  }
}

module.exports = { readFile, writeFile };
