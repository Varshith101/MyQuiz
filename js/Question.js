class Question {

  constructor() {
    this.title = createElement('h1')
    this.question=createElement('h5')
    this.answer=createElement('h6')
    this.answer1=createElement('h7')
    this.answer2=createElement('h8')
    this.answer3=createElement('h9')
    this.message=createElement('h10')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No...");
    
   //Create a input box to enter the number



    this.button = createButton('Submit');
    this.button1=createElement('h3')
    this.button2=createElement('h4')
    //Create elements for One question (h3) and 4 options (h4)




    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    this.input2.position(350,230);
    this.button.position(325,210)
    this.question.html("Question: What month of the year has 28 days?");
    this.question.position(155,80);
    this.answer.html("1:February");
    this.answer.position(155,95);
    this.answer1.html("2.April");
    this.answer1.position(154,130);
    this.answer2.html("3.All Of Them");
    this.answer2.position(154,146);
    this.answer3.html("4.None Of Them");
    this.answer3.position(154,160);
    



    //Create html() and position() for each question, input and answers.




    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message

    this.button.mousePressed(()=>{
      this.message.html("Thank You, Your Answer Has Been Submitted")
      this.message.position(200,350)

    })


  }
}
