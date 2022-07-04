/* Descrizione:
Stampare a schermo un messaggio all’interno di un elemento h1, utilizzando i data nell'istanza di Vue.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa dai data. */

const app = new Vue({
  el: "#root",
  data: {
    content: "CatsAreSupurrrrior",
    catName: "Begula",
    image:
      "https://yt3.ggpht.com/-zmdP1LF5JdZXIvL3-k_OAFmsmHOqb9BR1RukzrTl54JCe_E_Job0qVKzKG9ZIZgrBsGx1K2WA=s900-c-k-c0x00ffffff-no-rj",
  },
});
