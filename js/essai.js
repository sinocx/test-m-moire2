const hideBlock = () => {
  // Récupération de tte les questions de la page
  const allQuestion = document.querySelectorAll(".question")
  const question = document.querySelectorAll("[data-submit-id")
  // On itere sur tte les question pour récupérer l'évenement du clic sur le bouton suivant
  question.forEach( (elt) => {
    elt.addEventListener("click", (event) => {
      event.preventDefault();
      do {
        // récupération de L'id de la question où le bouton suivant à été cliqué
        const questionId = event.currentTarget.dataset.submitId;
        // Récupération de l'element
        const toggleElement = document.querySelector(`.question[data-question-id='${questionId}']`);
        toggleElement.removeAttribute("data-question-id")
        toggleElement.classList.add("hidden")
        // On appelle deleteQuestion en lui passant larray selectionné plus l'id de la question pour la supprimer de l'array
        deleteQuestion(randomNumber(), questionId)
      }
      while (question.length > 0);
      allQuestion.forEach(function(q){
        q.classList.remove("hidden")
      })
    });
  });
}

// fonction permettant de supprimer la question prédente de l'array en question
const deleteQuestion = (array, rand) => {
  // on recupere l'index de rand
  var index = array.indexOf(rand);
  if (index > -1) {
    // supression de lindex en question
    return array.splice(index, 1);
  }
  console.log(array)
}

const randomQuestion = (array) => {
  let numberQuestion = document.querySelectorAll(".question[data-question-id");
  let rand = array[Math.floor(Math.random() *array.length)];
  let nextQuestion = document.querySelector(`.question[data-question-id='${rand}']`);
  console.log(nextQuestion)
  nextQuestion.classList.remove("hidden");
  hideQuestion(nextQuestion);
  hideInput(nextQuestion);
  hideGif(nextQuestion)
}
// tentative de random par catégorie, on voulait obtenir dans un premier temps que les question facile puis moyen et
// enfin difficile or le pb est que lorsque qu'on rapelle randomNumber impossible de recuperer l'array avec la question précendente
// et donc il y'a un possibilité de retomber sur la meme question

const randomNumber = () => {
  let facile = [1, 2, 5, 6, 9, 10, 41, 42]
  let moyen = [36, 7, 15, 47]
  let difficile = [35, 8, 19, 51]
  // si facile ce modifier a chaque fois on aurait donc fait tte les question facile puis quand l'array est vide on aurait fait tt les moyens etc
  if (facile.length > 0){
    randomQuestion(facile)
  } else if (moyen.length >0) {
    randomQuestion(moyen)
  } else if (difficile.length > 0) {
     return randomQuestion(difficile)
  }else {
  }
}

const hideGif = (question) => {
  let gif = question.querySelector("#gif")
  let gif2 = question.querySelector("#gif2")
  let gif3 = question.querySelector("#gif3")
  if (gif) {
    var delayInMilliseconds = 22000;
  } else if (gif3) {
    var delayInMilliseconds = 12000;
  }
  else {
    var delayInMilliseconds = 14000;
  }
  setTimeout(function() {
    if (gif){
      gif.classList.add("hidden");
    } else if (gif2) {
      gif2.classList.add("hidden");
    } else {
      gif3.classList.add("hidden");
    }
  }, delayInMilliseconds);
}


const hideQuestion = (question) => {
  question.querySelectorAll(".quiz-item").forEach( (elt) => {
    elt.classList.toggle("hidden")
    var delayInMilliseconds = 14000;
    setTimeout(function() {
      elt.classList.toggle("hidden");
    }, delayInMilliseconds);
  });
}


const hideInput = (input) => {
  input.querySelectorAll("[data-choices]").forEach( (elt) => {
    elt.classList.toggle("hidden");
    var delayInMilliseconds = 14000;
    setTimeout(function() {
      elt.classList.toggle("hidden");
    }, delayInMilliseconds);
  });
}
hideBlock()


//Le probleme de cette solution est la donnée recupérée qui ce réinitialise et donc impossible de faire un test avec des questions unique
