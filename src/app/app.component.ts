import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'rock-paper-scissors';

  answers: Array<string> = ['rock', 'paper', 'scissors']
  playerAnswer: String = new String();
  computerAnswer: String = new String();
  result: String = new String();
  playerScore = 0;
  compScore = 0;
  isWinner:boolean = false
  isLooser:boolean = false

  getRandomInteger (min: number, max:number){
    return Math.floor(Math.random() * (max-min + 1)) + min;
  }

  /*getResult(n:HTMLInputElement) {

    let comAnswer = this.getRandomInteger(0,2);
    let answer = n.value;


    console.log(comAnswer)
    console.log(answer)

    if(comAnswer === 0 && answer === "rock" || comAnswer === 1 && answer === "paper" || comAnswer === 2 && answer === "scissors"){
      this.result = "Drow"
    } else if (comAnswer === 0 && answer === "paper" || comAnswer === 1 && answer === "rock" ||  comAnswer === 2 && answer === "rock") {
      this.result = "You Win!"
    } else if(comAnswer === 0 && answer === "scissors" || comAnswer === 1 && answer === "scissors" ||  comAnswer === 2 && answer === "paper"){
      this.result = "You Lose!"
    }

    n.value = ""
  }*/

  
  getResult2(event: Event) {
    let answer = (event.target as Element).id
    let comAnswer = this.getRandomInteger(0,2);
    

    if(comAnswer === 0 && answer === "rock" || comAnswer === 1 && answer === "paper" || comAnswer === 2 && answer === "scissors"){
      this.result = "Drow";
      this.playerAnswer = answer;
      this.computerAnswer = this.answers[comAnswer];
      this.playerScore += 1
      this.compScore +=1

    } else if (comAnswer === 0 && answer === "paper" || comAnswer === 1 && answer === "rock" ||  comAnswer === 2 && answer === "rock") {
      this.result = "You Win!"
      this.playerAnswer = answer;
      this.computerAnswer = this.answers[comAnswer];
      this.playerScore += 1

    } else if(comAnswer === 0 && answer === "scissors" || comAnswer === 1 && answer === "scissors" ||  comAnswer === 2 && answer === "paper"){
      this.result = "You Loose!"
      this.playerAnswer = answer;
      this.computerAnswer = this.answers[comAnswer];
      this.compScore +=1
    }

    this.getWinner()
    
  }

  getWinner () {
    if(this.playerScore == 10){
      this.isWinner = true
    } else 
    if(this.compScore == 10){
      this.isLooser = true
    }
  }

  rePlay () {
    this.playerScore = 0
    this.compScore = 0
    this.isLooser = false
    this.isWinner = false
    this.result = ''
  }
}
