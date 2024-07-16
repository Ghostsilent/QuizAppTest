let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Lyonel die Brezel",
        "answer_2": "Fabian der OG",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Mr.T",
        "right_answer": 3
    },
    {
        "question": "Welches CSS-Framework wurde von einer Küchenmaschine entwickelt?",
        "answer_1": "Bootstrap",
        "answer_2": "Blender",
        "answer_3": "Toaster",
        "answer_4": "Microwave",
        "right_answer": 1
    },
    {
        "question": "Welcher JavaScript-Entwickler hat die besten Tanzbewegungen?",
        "answer_1": "Node.js",
        "answer_2": "React.js",
        "answer_3": "Dancer.js",
        "answer_4": "JiveScript",
        "right_answer": 3
    },
    {
        "question": "Was ist das Lieblingsessen eines Frontend-Entwicklers?",
        "answer_1": "CSS Salat",
        "answer_2": "Java Fries",
        "answer_3": "HTML Hotdog",
        "answer_4": "React Burger",
        "right_answer": 4
    },
    {
        "question": "Welcher CSS-Eigenschaft würde ein Hund am meisten mögen?",
        "answer_1": "float",
        "answer_2": "border",
        "answer_3": "padding",
        "answer_4": "flex",
        "right_answer": 3
    }
];


let currentQuestion = 0; // ich sage "currentQuestion" ist = der Wert 0


function init() {
    document.getElementById('all-questions').innerHTML = questions.length; // ich sage das was in der id = "all-questions" steht, soll di elänge des Array sein.

    showQuestion()
}


function showQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';

    } else {

        let question = questions[currentQuestion]; // ich definiere die Variabel "question" als die 0. Stelle in dem Array "questions", bzw. ist sie fest die 0. Stelle wegen currentQuestion

        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question['question']; // der inhalt von id=questionText soll das sein vom Array an der Stelle: "question" als der Fragentext
        document.getElementById('answer_1').innerHTML = question['answer_1']; // der Inhalt von "answer_1" soll das vom Array sein also "Lyonel die Brezel" 
        document.getElementById('answer_2').innerHTML = question['answer_2']; // wie oben aber alles nur an der 0. Stelle gemeint, es geht nur um die erste Frage
        document.getElementById('answer_3').innerHTML = question['answer_3']; // wie oben
        document.getElementById('answer_4').innerHTML = question['answer_4']; // wie oben
    }
}

// ab hier Verständnisproblem
function answer(selection) { // onclick Funktion von den Div-Container der Antwortmöglichkeiten
    let question = questions[currentQuestion]; // wie oben = ich definiere die Variabel "question" als die 0. Stelle in dem Array "questions", bzw. ist sie fest die 0. Stelle wegen currentQuestion 
    console.log('Selected answer is ', selection) // damit ich in der Console sage: "Selected answer.. "
    let selectedQuestionNumber = selection.slice(-1); // ??? ich zieh das erste zeichen von selection ab und da "selection" = answer_1 ist dann heist es "answer_"?? Oder slive weil mein das letzte zeichen definiert also 1?
    console.log('selectedQuestionNumber is', selectedQuestionNumber); // wenn wie oben die "oder Option" gemeint ist, dann ist selectedQuestionNumber = 1?
    console.log('Current question is', question['right_answer']);


    let idOfRightAnswer = `answer_${question['right_answer']}`;


    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!!!')
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('Falsche Antwort!!!')
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    currentQuestion++; // z.B. von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}