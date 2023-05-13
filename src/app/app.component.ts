import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rock-paper-scissors';

  result: String = new String();
  playerAnswer: String = new String();
  computerAnswer: Number = new Number();

  getRandomInteger (min: number, max:number){
    return Math.floor(Math.random() * (max-min + 1)) + min;
  }

  getResult(n:HTMLInputElement) {

    let comAnswer = this.getRandomInteger(1,3);
    let answer = n.value;


    console.log(comAnswer)
    console.log(answer)

    if(comAnswer === 1 && answer === "rock" || comAnswer === 2 && answer === "paper" || comAnswer === 3 && answer === "scissors"){
      this.result = "Drow"
    } else if (comAnswer === 1 && answer === "paper" || comAnswer === 2 && answer === "rock" ||  comAnswer === 3 && answer === "rock") {
      this.result = "You Win!"
    } else if(comAnswer === 1 && answer === "scissors" || comAnswer === 2 && answer === "scissors" ||  comAnswer === 3 && answer === "paper"){
      this.result = "You Lose!"
    }

    n.value = ""
  }

  
  getResult2(event: Event) {
    let answer = (event.target as Element).id

    let comAnswer = this.getRandomInteger(1,3);


    console.log(answer)
    console.log(comAnswer)

    if(comAnswer === 1 && answer === "rock" || comAnswer === 2 && answer === "paper" || comAnswer === 3 && answer === "scissors"){
      this.result = "Drow";
      this.playerAnswer = answer;
      this.computerAnswer = comAnswer;
    } else if (comAnswer === 1 && answer === "paper" || comAnswer === 2 && answer === "rock" ||  comAnswer === 3 && answer === "rock") {
      this.result = "You Win!"
      this.playerAnswer = answer;
      this.computerAnswer = comAnswer;
    } else if(comAnswer === 1 && answer === "scissors" || comAnswer === 2 && answer === "scissors" ||  comAnswer === 3 && answer === "paper"){
      this.result = "You Lose!"
      this.playerAnswer = answer;
      this.computerAnswer = comAnswer;
    }

    
  }
}
