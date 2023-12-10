const Felicitation = document.getElementById("alert");

const btn = document.querySelector(".boutton");

// Fonction qunad on click sur le "check"
btn.addEventListener("click", function () {

    const Q1 = document.querySelector(".question-item1");
    const Q2 = document.querySelector(".question-item2");
    const Q3 = document.querySelector(".question-item3");

    const answer1 = document.querySelector('input[name="answer-1"]:checked');
    const answer2 = document.querySelector('input[name="answer-2"]:checked');
    const answer3 = document.querySelector('input[name="answer-3"]:checked');

    checkAnswer(Q1, answer1);
    checkAnswer(Q2, answer2);
    checkAnswer(Q3, answer3);

//condition pour afficher le message
    if (answer1.value == "true" && answer2.value == "true" && answer3.value == "true") {
      Felicitation.style.display = "block";
    } else {
      Felicitation.style.display = "none";
    }
  });

  // condition pour changer la couleur

    function checkAnswer(question, answer) {
        if (answer.value === "true") {
          question.classList.add("verte");
          question.classList.remove("rouge");
        } else {
          question.classList.add("rouge");
          question.classList.remove("verte");
        }
      }


