let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// 1. Afficher les fruits avec forEach
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
}

// 2. Fonction cloneGroceries
const cloneGroceries = () => {
    // Copie par valeur (primitives)
    let user = client;

    // Modification de la variable
    client = "Betty";

    console.log("client:", client); // Betty
    console.log("user:", user); // John

    // Pourquoi ? Parce que les chaînes de caractères (primitives) sont copiées par valeur.
    // Ici, user reste "John" même si client change.

    // Copie par référence (objets)
    let shopping = groceries;

    // Modification d'une propriété primitive
    shopping.totalPrice = "35$";

    // Modification d'une propriété imbriquée (objet)
    shopping.other.paid = false;

    console.log("groceries.totalPrice:", groceries.totalPrice); // 35$
    console.log("shopping.totalPrice:", shopping.totalPrice); // 35$

    console.log("groceries.other.paid:", groceries.other.paid); // false
    console.log("shopping.other.paid:", shopping.other.paid); // false

    // Pourquoi ? => Parce que shopping et groceries référencent le même objet.
    // Toute modification via shopping affecte groceries, car c'est une copie par référence.
}

displayGroceries();
cloneGroceries();