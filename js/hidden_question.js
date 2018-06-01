/*const hideBlock = () => {
  const question = document.querySelectorAll("[data-submit-id")
  question.forEach( (elt) => {
    elt.addEventListener("click", (event) => {
      event.preventDefault();
      const questionId = event.currentTarget.dataset.submitId;
      const toggleElement = document.querySelector(`.question[data-question-id='${questionId}']`);
      toggleElement.remove();
      randomNumber();
    });
  });
}*/
const hideBlock = () => {
  // Récupération de tte les questions de la page
  const allQuestion = document.querySelectorAll(".question")
  const question = document.querySelectorAll("[data-submit-id")
  const dQuestion = document.querySelectorAll("[data-question-id")
  console.log(question)
  // On itere sur tte les question pour récupérer l'évenement du clic sur le bouton suivant
  question.forEach( (elt) => {
    elt.addEventListener("click", (event) => {
      event.preventDefault();
      // Récupération de l'id de la question où l"on a cliquer
      const questionId = event.currentTarget.dataset.submitId;
      // récuperation de l'element selectionnée
      const toggleElement = document.querySelector(`.question[data-question-id='${questionId}']`);
      // Hide l'element récupéré
      toggleElement.classList.add("hidden");
      // Suppression de l'element
      toggleElement.remove();
      // Appel de la fonction permettant de récuperer l"id de la question suivante
      randomNumber();
    });
    });
  };

const randomNumber = () => {
  // recupération de tte les questions encore disponible
  let numberQuestion = document.querySelectorAll(".question[data-question-id");
  // rand pour récuperer une question aléatoirement
  let rand = numberQuestion[Math.floor(Math.random() *numberQuestion.length)];
  // Suppression de la classe hidden
  rand.classList.remove("hidden");
  // appel des fonction pour affiché / faire disparaitre les gif / input / question avec un delay different
  // en leur passant la question selectionnée
  hideQuestion(rand);
  hideInput(rand);
  hideGif(rand)
}

const hideGif = (question) => {
  // récupération des 3 catégorie de gif possible
    let gif = question.querySelector("#gif")
    let gif2 = question.querySelector("#gif2")
    let gif3 = question.querySelector("#gif3")
    // On attribue le bon temps pour le gif de la question sélectionné
    if (gif) {
      var delayInMilliseconds = 22000;
       console.log("3")
    } else if (gif3) {
      var delayInMilliseconds = 12000;
    }
    else {
      var delayInMilliseconds = 14000;
    }
    console.log(delayInMilliseconds)
    // Fonction permettant de faire disparaitre le gif avec le temps selectionnée auparavant
    setTimeout(function() {
      if (gif){
        gif.classList.add("hidden");
        console.log("1")
      } else if (gif3) {
        gif3.classList.add("hidden");
      }
       else {
        console.log("2")
        gif2.classList.add("hidden");
      }
    console.log(delayInMilliseconds)
    }, delayInMilliseconds);

}
hideQuestion = (question) => {
  //Affichage des question avec un délay de 14 s pour tte les questions
  question.querySelectorAll(".quiz-item").forEach( (elt) => {
    elt.classList.toggle("hidden")
    var delayInMilliseconds = 14000;
    setTimeout(function() {
      elt.classList.toggle("hidden");
    }, delayInMilliseconds);
  });
}
hideInput = (input) => {
  //Affichage des input avec un délay de 14 s pour tte les inputs
  input.querySelectorAll("[data-choices]").forEach( (elt) => {
    elt.classList.toggle("hidden");
    var delayInMilliseconds = 14000;
    setTimeout(function() {
      elt.classList.toggle("hidden");
    }, delayInMilliseconds);
  });
}

// Appel de la fonction principale
hideBlock()
