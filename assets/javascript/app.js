//Setting global variables
var trivia = {
    initialScreen: "",
    correctCounter: 0,
    inCorrectCounter: 0,
    unAnsweredCounter: 0,
    gameHTML: "",
// questions for the game    
    questionsArray: ["This President went on record claiming to have spotted a UFO.", "Which president kept his pet goat and cow at the White House?", "This president married his teacher.", 
    "Which president was a bachelor during his term?", "Which sport did Abraham Lincoln have a lengendary career at?", "The New York Times said this president was 'the most unpopular man that has ever held any office in the U.S.'",
    "Which president died after consuming a large bowl of cherries and milk?", "Who is the only president to have earned a PhD?","Which president lost the White House china in a poker game?",
    "He was the smallest president weighing only 100 lbs and stood 5 feet 4 inches tall","This president was suspected of having a fear of public speaking as he only gave 2 speeches in his eight years as president",
    "This president somehow lost the nuclear launch codes"],
// answer choices for each question   
    answerArray: [ ["Richard Nixon", "Bill Clinton", "Jimmy Carter", "Andrew Jackson"],["Grover Cleveland","William Taft","Lyndon Johnson","William Henry Harrison"],["Millard Fillmore","John F. Kennedy","Harry S. Truman","William McKinley"],
    ["Dwight D. Eisenhower","James Buchanan","Calvin Coolidge","Woodrow Wilson"],["wrestling","bowling","golf","basketball"],["Theodore Roosevelt","Barrack Obama","John Tyler","Bill Clinton"],
    ["Zachary Taylor","James Garfield","Ulysses S. Grant","Andrew Johnson"],["Abraham Lincoln","Thomas Jefferson","Franklin D. Roosevelt","Woodrow Wilson"],["Rutherford B. Hayes","Barack Obama","Warren Harding","James A. Garfield"],
    ["John Quincy Adams","James Madison","Franklin Pierce","Martin Van Buren"],["James Monroe","Richard Nixon","Thomas Jefferson","James K. Polk"],["Bill Clinton","George Bush,Jr.","Barack Obama","Lyndon Johnson"] ],
// correct answers for the game     
    correctAnswers: ["C. Jimmy Carter","D. William Henry Harrison","A. Millard Fillmore",
     "B. James Buchanan","A. wrestling","C. John Tyler", "A. Zachary Taylor","D. Woodrow Wilson",
     "C. Warren Harding","B. James Madison","C. Thomas Jefferson","A. Bill Clinton"],
// images for each question    
    imageArray: [ "<img class='center-block img-right' src='assets/images/jimmycarter.jpg'>", "<img class='center-block img-right' src='assets/images/williamhenryharrison.jpg'>", "<img class='center-block img-right' src='assets/images/millardfillmore.jpg'>", 
    "<img class='center-block img-right' src='assets/images/jamesbuchanan.jpg'>", "<img class='center-block img-right' src='assets/images/abrahamlincoln.jpg'>", "<img class='center-block img-right' src='assets/images/johntyler.jpg'>", "<img class='center-block img-right' src='assets/images/zacharytaylor.jpg'>",
    "<img class='center-block img-right' src='assets/images/woodrowwilson.jpg'>", "<img class='center-block img-right' src='assets/images/warrenharding.jpg'>", "<img class='center-block img-right' src='assets/images/jamesmadison.jpg'>", "<img class='center-block img-right' src='assets/images/thomasjefferson.jpg'>",
    "<img class='center-block img-right' src='assets/images/bill clinton.jpg'>"],
   
    clock: "",
    questionCounter: 0,
    timeCounter: 20,
  };
  
  //functions
  function startScreen(){
    trivia.initialScreen = "<p class='text-center main-button'><a class='btn btn-primary btn-lg start-button text-center' href='#'>Start the Game</a></p>";
    $(".main-area").html(trivia.initialScreen);
  };
  
  function timer(){
    trivia.clock = setInterval(twentySeconds, 2000);
    function twentySeconds(){
      if(trivia.timeCounter === 0){
        timeOutLoss();
        clearInterval(trivia.clock);
      }
      if(trivia.timeCounter > 0) {
        trivia.timeCounter --;
      }
      $(".timer").html(trivia.timeCounter);
    }
  };
  
  function wait(){
    if(trivia.questionCounter < 11) {
      trivia.questionCounter ++;
      generateHTML();
      trivia.timeCounter = 20;
      timer();
    }
    else {
      finalScreen();
    }
  };
  
  function win(){
    trivia.correctCounter ++;
    trivia.gameHTML = "<p class='text-center'> Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>That's Correct! The answer is: " + trivia.correctAnswers[trivia.questionCounter] + "</p>" + trivia.imageArray[trivia.questionCounter];
    $(".main-area").html(trivia.gameHTML);
    setTimeout(wait, 5000);
  };
  
  function loss(){
    trivia.inCorrectCounter ++;
    trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>Better luck next time, Wrong! The correct answer is: "+ trivia.correctAnswers[trivia.questionCounter] + "</p>" + trivia.imageArray[trivia.questionCounter];
      $(".main-area").html(trivia.gameHTML);
      setTimeout(wait, 5000);
  };
  
  function timeOutLoss(){
    trivia.unAnsweredCounter ++;
    trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>Hey, You ran out of time!  The correct answer was: " + trivia.correctAnswers[trivia.questionCounter] + "</p>" + trivia.imageArray[trivia.questionCounter];
      $(".main-area").html(trivia.gameHTML);
      setTimeout(wait, 5000);
  };
  
  function finalScreen(){
    trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>Finished, here is your score!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + trivia.correctCounter + "</p>" + "<p>Wrong Answers: " + trivia.inCorrectCounter + "</p>" + "<p>Unanswered: " + trivia.unAnsweredCounter + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Restart The Game!</a></p>";
    $(".main-area").html(trivia.gameHTML);
  };
  
  function resetGame(){
    trivia.questionCounter = 0;
    trivia.correctCounter = 0;
    trivia.inCorrectCounter = 0;
    trivia.unAnsweredCounter = 0;
    trivia.timeCounter = 20;
    generateHTML();
    timer();
  };
  
  function generateHTML(){
    trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>20</span></p><p class='text-center'>" + trivia.questionsArray[trivia.questionCounter] + "</p><button class='first-answer answer'>A. " + trivia.answerArray[trivia.questionCounter][0] + "</button><br><button class='answer'>B. "+trivia.answerArray[trivia.questionCounter][1]+"</button><br><button class='answer'>C. "+trivia.answerArray[trivia.questionCounter][2]+"</button><br><button class='answer'>D. "+trivia.answerArray[trivia.questionCounter][3]+"</button>";
    $(".main-area").html(trivia.gameHTML);
  }
  
  startScreen();
  
  //start-button click
  $("body").on("click", ".start-button", function(event){
      event.preventDefault();
      generateHTML();
      timer();
  });
  // answer clicks
  $("body").on("click", ".answer", function(event){
        selectedAnswer = $(this).text();
      if(selectedAnswer === trivia.correctAnswers[trivia.questionCounter]) {
          clearInterval(trivia.clock);
          win();
      }
      else {
          clearInterval(trivia.clock);
          loss();
      }
  });
  // reset game
  $("body").on("click", ".reset-button", function(event){
      resetGame();
  });