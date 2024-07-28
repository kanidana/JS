// Fonctions de manipulation de chaînes :

// 1) Inverser une chaîne : Écrivez une fonction qui inverse une chaîne donnée.


function r (phr) { 
    var mot = phr.split(" ")
    return mot.reverse().join(" ")
  }

  var mm = "salut les gens"
  console.log(r(mm))



//   voici ce que chacune des trois fonctions fera.
// split() séparera chaque caractère d’une chaîne et la convertira en tableau.
// reverse() prendra ce tableau et inversera les éléments qu’il contient.
// join() rejoindra les caractères qui ont été inversés par la fonction reverse().


// 2) Compter les caractères : créez une fonction qui compte le nombre de caractères d’une chaîne.

function comptage(string){
    return string.length
}

var str = "bonjour"
console.log(comptage(str))


// 3) Mettre les mots en majuscules : Implémentez une fonction qui met en majuscule la première lettre de chaque mot d’une phrase.

function majuscule(phrase) {
    const mot = phrase.toLowerCase().split(' ');
    for (let i = 0; i < mot.length; i++) {
        mot[i] = mot[i][0].toUpperCase() + mot[i].slice(1);
    }
    return mot.join(' ');
}

const lemot = "mariam joue a la balle";
console.log(majuscule(lemot));


// Fonctions du tableau :
// Trouver le maximum et le minimum : Écrivez des fonctions pour trouver les valeurs maximum et minimum dans un tableau de nombres.



function minmax(mM){
    let minimun = Math.min(...mM)
    let maximum = Math.max(...mM)
    return `le maximum est ${maximum} et le minimum est ${minimun}`
}

let minAndMax = [12, 13, 1, 50, 2, 27, 0, 100]
console.log(minmax(minAndMax))



// Somme du tableau : créez une fonction qui calcule la somme de tous les éléments d’un tableau.

function sommable(tab){
    let som =0
    for(let i=0; i < tab.length; i++){
        console.log(som+= tab[i])
    }
}

let array = [12, 13, 140, 23, 1, 0]
console.log(sommable(array))


// Filter Array : implémente une fonction qui filtre les éléments d’un tableau en fonction d’une condition donnée.

function supprimerElementsDifferentsSuivants(tableau) {
    let tableauFiltre = [];
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] === tableau[i + 1]) {
            tableauFiltre.push(tableau[i]);
        }
    }
    return tableauFiltre;
}

// Exemple d'utilisation
let tableauMixte = ["Bonjour", 2, "Bonjour", 3, 3, "Salut"];
let tableauFiltreMixte = supprimerElementsDifferentsSuivants(tableauMixte);
console.log(tableauFiltreMixte); // Affichera ["Bonjour", 3]


// Fonctions mathématiques :
// Factorielle : Écrivez une fonction pour calculer la factorielle d’un nombre donné.
// la factorielle d'un entier naturel n est le produit des nombres 
// entiers strictement positifs inférieurs ou égaux à n.

function calculerFactorielle(nbr) {
    let resultat = 1;
    for (let i = 1; i <= nbr; i++) {
        resultat *= i;
    }
    return resultat;
}

console.log(calculerFactorielle(5)); 


// Vérification des nombres premiers : Créez une fonction pour vérifier si un nombre est premier ou non

// Un nombre premier est un entier naturel qui admet seulement deux diviseurs distincts
//  entiers et positifs : 1 et le nombre considéré lui-même.

function estNombrePremier(n) {
    if (n < 2) {
        return false ;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false ;
        }
    }
    return  true ;
}

console.log(estNombrePremier(13));



// Séquence de Fibonacci : Implémentez une fonction pour générer la suite de Fibonacci jusqu’à un nombre donné de termes. (recherche sur le net

// Suite de Fibonacci La suite de Fibonacci est une suite particulière, 
// dont chaque terme est la somme des deux précédents : 1, 1, 2, 3, 5, 8, 13... 
// Elle fut découverte par le mathématicien italien Leonardo Fibonacci.
//  Outre ses propriétés mathématiques, cette suite peut être observée dans la nature.

function genererSuiteFibonacci(nbrTermes) {
    
    let n1 = 0, n2 = 1, prochainTerme;
    console.log('Suite de Fibonacci:');
    for (let i = 1; i <= nbrTermes; i++) {
        console.log(n1);
        prochainTerme = n1 + n2;
        n1 = n2;
        n2 = prochainTerme;
    }
}

genererSuiteFibonacci(5);





