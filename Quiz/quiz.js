

//Question bank
var questionBank= [
    {
        question : 'What is the name of the method used to start a thread execution ?',
        option : ['init();','start();','run();','resume();'],
        answer : 'start();'
    },
    {
        question : 'Which of the following would compile without error?',
        option : ['int a = Math.abs(-5);','	int b = Math.abs(5.0);','int c = Math.abs(5.5F);','int d = Math.abs(5L);'],
        answer : 'int a = Math.abs(-5);'
    },
    {
        question : 'A primary key should be defined as:',
        option : ['	NULL. ','NOT NULL.','Either of the above can be used.','None of the above are correct.'],
        answer : 'NOT NULL.'
    },
    {
        question : ' Which of the following column properties would be used to specify that cells in a column must contain a monetary value?',
        option : ['Null status','Data type','Default value','Data constraints'],
        answer : '	Data type'
    },
    {
        question : 'If you want to disable STP on a port connected to a server, which command would you use?',
        option : ['disable spanning-tree','spanning-tree off','spanning-tree security','spanning-tree portfast'],
        answer : 'spanning-tree portfast'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();