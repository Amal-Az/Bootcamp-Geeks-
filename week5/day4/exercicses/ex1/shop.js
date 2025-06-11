const products = require('./products');

function findProductByName(productName) {
  // Chercher dans le tableau le produit dont le nom correspond
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
  if (product) {
    console.log('Produit trouvé:', product);
  } else {
    console.log(`Produit "${productName}" non trouvé.`);
  }
}

// Tester la fonction avec différents noms
findProductByName('Laptop');
findProductByName('Shoes');
findProductByName('Smartphone'); // Produit non présent dans la liste