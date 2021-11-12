const panier = document.getElementById("panier")
const prixTotalText = document.getElementById("prix_total")

const nbCerise = prompt("Combien de cerises voulez-vous acheter ? (1euro/pièce)")
const nbPomme = prompt("Combien de pommes voulez-vous acheter ? (0.5euro/pièce)")
const nbPoire = prompt("Combien de poires voulez-vous acheter ? (0.75euro/pièce)")


const prixTotal = parseInt(nbCerise) + (nbPomme * 0.5) + (nbPoire * 0.75)

const cerise = document.createElement("li")
cerise.innerText = `Vous avez acheté ${nbCerise} cerises au prix de ${nbCerise} euros`

const pomme = document.createElement("li")
pomme.innerText = `Vous avez acheté ${nbPomme} cerises au prix de ${nbPomme*0.5} euros`

const poire = document.createElement("li")
poire.innerText = `Vous avez acheté ${nbPoire} cerises au prix de ${nbPoire*0.75} euros`

panier.appendChild(cerise)
panier.appendChild(pomme)
panier.appendChild(poire)


prixTotalText.innerText = `Prix total : ${prixTotal} euros`