

/* Dans cette version, on peut générer une liste de courses 
   Les ingrédients communs sont regroupés et leurs quantités additionnées 
 */


function IngredientRecette(nom, quantite, unite, optionnel) {
    this.nom = nom;
    this.quantite = quantite;
    this.unite = unite;
    this.optionnel = optionnel;
}

function EtapeRecette(ordre, description) {
    this.ordre = ordre;
    this.description = description;
}

function Recette(titre, ingredients, etapes, dureePreparation, dureeCuisson, dureeTotale) {
    this.titre = titre;
    this.ingredients = ingredients;
    this.etapes = etapes;
    this.dureePreparation = dureePreparation;
    this.dureeCuisson = dureeCuisson;
    this.dureeTotale = dureeTotale;
}

function obtenirListeCourses(recettes) {
    //1. construction tableau d'ingrédients
    let ingredients = obtenirIngredients(recettes);

    //2. Regroupement des quantités
    return regrouperIngredientsCommuns(ingredients);
}

function obtenirIngredients(recettes) {
    let ingredients = [];

    for (let r of recettes) {
        ingredients = ingredients.concat(r.ingredients);
    }

    return ingredients;
}

function regrouperIngredientsCommuns(ingredients) {
    let ingredientsRegroupes = [];
    
    for (let ingredientCourant of ingredients) {
        let ingredientTrouve = ingredientsRegroupes.find(i => i.nom === ingredientCourant.nom && i.unite === ingredientCourant.unite);
        if (ingredientTrouve) {
            ingredientTrouve.quantite += ingredientCourant.quantite;
        } else {
            ingredientsRegroupes.push(ingredientCourant);
        }
    }

    return ingredientsRegroupes;
}

let ingredientsBoeufBourguignon = [
    new IngredientRecette("Boeuf", 800, "grammes", false),
    new IngredientRecette("Lardons", 100, "grammes", false),
    new IngredientRecette("Beurre", 50, "grammes", false),
    new IngredientRecette("Vin rouge", 750, "ml", false),
    new IngredientRecette("Oignons", 2, undefined,false),
    new IngredientRecette("Gousse d'ail", 1, undefined, false),
    new IngredientRecette("Farine", 40, "grammes", false),
    new IngredientRecette("Bouquet garni", 1, false),
    new IngredientRecette("Champignons de paris", 250, "grammes", true),
    new IngredientRecette("Sel", 2, "grammes", false),
    new IngredientRecette("Poivre", 2, "grammes", false)
];

let etapesBoeufBourguignon = [
    new EtapeRecette(1, "Hacher les oignons. Peler l'ail."),
    new EtapeRecette(2, "Dans une cocotte minute, faire roussir la viande et les lardons dans l’huile ou le beurre."),
    new EtapeRecette(3, "Ajouter les oignons, les champignons égouttés et saupoudrer de fariner. Mélanger et laisser dorer un instant."),
    new EtapeRecette(4, "Mouiller avec le vin rouge qui doit recouvrir la viande."),
    new EtapeRecette(5, "Saler et poivrer."),
    new EtapeRecette(6, "Ajouter l’ail et le bouquet garni."),
    new EtapeRecette(7, "Fermer la cocotte minute."),
    new EtapeRecette(8, "Laisser cuire doucement 60 min à partir de la mise en rotation de la soupape.")
];

let ingredientsTarte = [
    new IngredientRecette("Farine", 250, "grammes", false),
    new IngredientRecette("Eau", 80, "ml", false),
    new IngredientRecette("Sel", 2, "grammes", false),
    new IngredientRecette("Pommes Golden", 6, undefined, false),
    new IngredientRecette("Sucre vanillé", 1, "sachet", false),
    new IngredientRecette("Beurre", 155, "grammes", false)
];

let etapesTarte = [
    new EtapeRecette(1, "Éplucher et découper en morceaux 4 Golden."),
    new EtapeRecette(2, "Faire une compote : les mettre dans une casserole avec un peu d'eau (1 verre ou 2). Bien remuer. Quand les pommes commencent à ramollir, ajouter un sachet ou un sachet et demi de sucre vanillé. Ajouter un peu d'eau si nécessaire."),
    new EtapeRecette(3, "Vous saurez si la compote est prête une fois que les pommes ne seront plus dures du tout. Ce n'est pas grave s'il reste quelques morceaux."),
    new EtapeRecette(4, "Pendant que la compote cuit, éplucher et couper en quatre les deux dernières pommes, puis, couper les quartiers en fines lamelles (elles serviront à être posées sur la compote)."),
    new EtapeRecette(5, "Préchauffer le four à 210°C (thermostat 7)."),
    new EtapeRecette(6, "Laisser un peu refroidir la compote et étaler la pâte brisée dans un moule et la piquer avec une fourchette."),
    new EtapeRecette(7, "Verser la compote sur la pâte et placer les lamelles de pommes en formant une spirale ou plusieurs cercles, au choix ! Disposer des lamelles de beurre dessus."),
    new EtapeRecette(8, "Mettre au four et laisser cuire pendant 30 min max. Surveiller la cuisson. Vous pouvez ajouter un peu de sucre vanillé sur la tarte pendant que çà cuit pour caraméliser un peu.")
];

let recettes = [];
recettes.push(new Recette("Boeuf Bourguignon Rapide", ingredientsBoeufBourguignon, etapesBoeufBourguignon, "45min", "1H"));
recettes.push(new Recette("Tarte aux pommes", ingredientsTarte, etapesTarte, null, null, "1H"));

// console.log(recettes);


//Définir ma liste de courses
let liste = obtenirListeCourses(recettes);

console.log("Ma liste de courses : ");

for (let produit of liste) {
    if (produit.unite) {
        console.log(produit.nom + " " + produit.quantite + " " + produit.unite);
    } else {
        console.log(produit.quantite + " " + produit.nom);
    }
}