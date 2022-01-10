# USAL34 - Algo / JavaScript - Evaluation 1

**NE PAS TOUCHER AU FICHIER index.html et style.css**

---

Exercice 1 :

Expliquez le code javascript en ajoutant des commentaires dans le code ci-dessous, sur ce fichier .md et non le fichier script.js qui va évoluer avec les autres exercices) :

```js
const buttonA = document.querySelector("#button-a");
const buttonB = document.querySelector("#button-b");

function pressOnKey(key) {
  console.log(key);
}

document.addEventListener("keyup", function (event) {
  console.log(event.key);
  if (event.key === "a") {
    buttonA.classList.remove("pressed");
    pressOnKey(event.key);
  }
  if (event.key === "b") {
    buttonB.classList.remove("pressed");
    pressOnKey(event.key);
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    buttonA.classList.add("pressed");
  }
  if (event.key === "b") {
    buttonB.classList.add("pressed");
  }
});
```

---

Exercice 2 :

Créez une fonction qui va prendre un texte en paramètre et créez un paragraphe directement dans le prompteur (l'élément avec l'id 'affichage'). Vous testerez cette fonction en l'exécutant dans le code avec le paramètre "Hello".

Le résultat dans le html sera :

```html
<div id="affichage">
  <p>Hello</p>
</div>
```

---

Exercice 3 :

Affichez le texte "Je presse sur a" sur le prompteur (l'élément avec l'id 'affichage') lorsque vous pressez la touche A sur votre clavier. Faites la même chose avec la touche B (et le texte "Je presse sur b").

Pour vous aider :

Il suffit de reprendre la fonction que vous avez créé dans l'exercice 2 et le code inital. Si vous n'avez pas réussi l'exercice 2, vous pouvez simplement afficher le texte dans la console.

Exemple du résultat attendu en html :

```html
<div id="affichage">
  <p>Hello</p>
  <p>Je presse sur a</p>
  <p>Je presse sur b</p>
  ...
</div>
```

---

Exercice 4 :

- Au clic sur le bouton "select", changer le mode d'affichage du prompteur en ajoutant / supprimant la classe 'is-dark' à la balise qui a la classe '.nes-container'.

Pour vous aider :
https://developer.mozilla.org/fr/docs/Web/API/Element/classList

---

Exercice 5 :

En cliquant sur "Start", affichez sur le prompteur (l'élément avec l'id 'affichage') la liste des jeux en utilisant les données ci-dessous :

```js
const games = [
  {
    name: "Super Mario",
    price: 20,
  },
  {
    name: "Tetris",
    price: 25,
  },
  {
    name: "Sonic",
    price: 17.5,
  },
];
```

Pour vous aider :

Si vous n'avez pas réussi l'exercice 2, vous pouvez simplement afficher le texte dans la console.

Résultat attendu en html :

```html
<div id="affichage">
  ...
  <p>Super Mario : 20 €</p>
  <p>Tetris : 25 €</p>
  <p>Sonic : 17,50 €</p>
  ...
</div>
```

---

Exercice 6 :

Ajoutez une condition pour ne garder que les 5 dernières lignes. La première ligne sera donc supprimée lorsque vous aurez pressé une sixième fois sur A ou B.

Pour vous aider, quelques rappels :

- `document.querySelectorAll("#affichage p").length` vous donne le nombre d'éléments paragraphes dans la balise #affichage
- la documentation https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild peut vous aider à supprimer un élément du DOM
