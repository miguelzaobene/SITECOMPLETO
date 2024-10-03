function disableOptions(questionName) {
    let options = document.getElementsByName (questionName);
    options.forEach(option => {
        if (!option.checked){
            option.disabled = true;
        }
    });
}
 
function playSound() {
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}
 
function SubmitQuiz() {
   
    let correctAnswers = {
        q1: "B",
        q2: "C",
        q3: "B",
        q4: "C",
        q5: "A",
        q6: "A",
        q7: "B",
        q8: "B",
        q9: "C",
        q10: "C"
    };
 
    let form = document.getElementById('quiz-form');
    let score = 0;
 
    for (let key in correctAnswers) {
        let userAnswer = form.elements[key].value;
        if (userAnswer === correctAnswers[key]) {
            score++;
        }
    }
 
    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas.`;
 
    if (score === 10) {
        let successSound = document.getElementById('venceusom');
        successSound.play();
    }else if (score < 10) {
        let defeatSound = document.getElementById('perdeusom');
        defeatSound.play();
    }
 
    let botao1 = document.getElementById('botao1');
            botao1.disabled = true;
            botao1.classList.remove('active');
            botao1.classList.add('disabled');
 
            let botao2 = document.getElementById('botao2');
            botao2.disabled = false;
            botao2.classList.remove('disabled');
            botao2.classList.add('active');
 
};
 