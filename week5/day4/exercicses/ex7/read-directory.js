import fs from 'fs';

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Erreur lors de la lecture du dossier:', err);
    return;
  }

  console.log('Fichiers dans le dossier actuel :');
  files.forEach(file => {
    console.log(file);
  });
});
