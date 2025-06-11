import fs from 'fs';

export default function readFileContent() {
  fs.readFile('./source.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur de lecture du fichier :', err);
    } else {
      console.log('Contenu du fichier :', data);
    }
  });
}
