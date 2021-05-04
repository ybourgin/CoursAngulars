//Exemple de modélisation de recettes uniquement avec des tableaux 

let recettes = [];

//Première manière d'initialiser mon tableau :
let boeufBourguignon = [
    "Boeuf Bourguignon Rapide",
    ["800gr boeuf", "100g lardons", "50g beurre",
        "2/3L vin rouge", "2 oignons", "1 gousse d'ail",
        "2cas. farine", "1 bouquet garni", "250g champignons de paris", "sel", "poivre"],
    ["1.Hacher les oignons. Peler l'ail.",
        "2. Dans une cocotte minute, faire roussir la viande et les lardons dans l’huile ou le beurre.",
        "3. Ajouter les oignons, les champignons égouttés et saupoudrer de fariner. Mélanger et laisser dorer un instant.",
        "4. Mouiller avec le vin rouge qui doit recouvrir la viande.",
        "6. Ajouter l’ail et le bouquet garni.",
        "7. Fermer la cocotte minute.",
        "8. Laisser cuire doucement 60 min à partir de la mise en rotation de la soupape."
    ]
];

recettes.push(boeufBourguignon);

//Mince, j'ai oublié l'étape 5...
//Option 1 : je récupère les étapes 1 à 4 puis 6 à 8
let debutRecette = boeufBourguignon[2].slice(0, 4); //4 premières étapes
let finRecette = boeufBourguignon[2].slice(4); //Dernières étapes

debutRecette.push("5. Saler et poivrer."); //mutateur
let etapesCompletes = debutRecette.concat(finRecette); //accesseur
boeufBourguignon[2] = etapesCompletes;

//Option 2 : j'utilise splice 
boeufBourguignon[2].splice(4, 0, "5. Saler et poivrer.");

// console.log(recettes);

let tartePommes = [];

//Commençons par la liste des ingrédients
tartePommes.push([
    "1 pâte brisée", "6 pommes golden", "1 sachet de sucre vanillé", "30g de beurre"
]);

//Puis ajoutons le nom de la recette en première position du tableau
tartePommes.unshift("Tarte aux pommes");

//Puis ajoutons les étapes dans l'odre inverse 
let etapes = [];
etapes.push("8. Mettre au four et laisser cuire pendant 30 min max. Surveiller la cuisson. Vous pouvez ajouter un peu de sucre vanillé sur la tarte pendant que çà cuit pour caraméliser un peu.");
etapes.push("7. Verser la compote sur la pâte et placer les lamelles de pommes en formant une spirale ou plusieurs cercles, au choix ! Disposer des lamelles de beurre dessus.");
etapes.push("6. Laisser un peu refroidir la compote et étaler la pâte brisée dans un moule et la piquer avec une fourchette.");
etapes.push("5. Préchauffer le four à 210°C (thermostat 7).");
etapes.push("4. Pendant que la compote cuit, éplucher et couper en quatre les deux dernières pommes, puis, couper les quartiers en fines lamelles (elles serviront à être posées sur la compote).");
etapes.push("3. Vous saurez si la compote est prête une fois que les pommes ne seront plus dures du tout. Ce n'est pas grave s'il reste quelques morceaux.");
etapes.push("2. Faire une compote : les mettre dans une casserole avec un peu d'eau (1 verre ou 2). Bien remuer. Quand les pommes commencent à ramollir, ajouter un sachet ou un sachet et demi de sucre vanillé. Ajouter un peu d'eau si nécessaire.");
etapes.push("1. Éplucher et découper en morceaux 4 Golden.");

//On inverse l'ordre du tableau 
etapes.reverse();

//On ajoute 3 fois les étapes par "mégarde"
tartePommes.push(etapes, etapes, etapes);

//Retirons les étapes inutiles
tartePommes.splice(3, 2); //A partir de la 4ème position, supprimer 2 éléments

// console.log(tartePommes);

recettes.push(tartePommes);

console.log("Liste des recettes :");
for (let recette of recettes) {
    console.log(recette[0]);
}

// Revient à écrire
// for (let i = 0; i < recettes.length ; i++) {
//     console.log(recettes[i][0]);
// }

recettes[1][0] = "Tarte aux pommes normande";

console.log("Liste des recettes mise à jour :");
for (let recette of recettes) {
    console.log(recette[0]);
}

console.log(recettes);