import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  solution: string;
  rows: string[] = [];
  NUM_ROWS: number = 6;
  WORD_LENGTH: number = 5;

  LETTERS: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor() { 
    this.solution = "STARE";
  }

  ngOnInit(): void {
  }

  handleGuess(event: any): void {

    let guess = event.target.value.toUpperCase();

    // make sure the guess has exactly 5 characters
    if (guess.length !== this.WORD_LENGTH) {
      return;
    }

    // put the guess in this.rows
    this.rows.push(guess);

    // did they get answer?
    if (guess === this.solution) {
      setTimeout(function(){
        alert("You won!");
      }, 0); 
    }

    // is this the final guess? 
    if (this.rows.length === this.NUM_ROWS && guess !== this.solution) {
      setTimeout(function(){
        alert("You lost!");
      }, 0); 
    }

    if (guess === this.solution || this.rows.length === this.NUM_ROWS) {
      event.target.disabled = true;
    }

    event.target.value = '';
  }

  isGuess(letter: string): boolean {
    let isGuess = false;
    
    for (let i: number = 0; i < this.rows.length; i++) {
      if (this.rows[i].includes(letter)) {
        isGuess = true;
        break;
      }
    }

    return isGuess;
  }

  isLetterMatch(letter: string): boolean {
    let isMatch = false;
    
    if (this.isGuess(letter) && this.solution.includes(letter)) {
      isMatch = true;
    }

    return isMatch;
  }

  isLocationMatch(letter: string): boolean {
    let isMatch = false;
    
    for (let i: number = 0; i < this.rows.length; i++) {
      if (this.rows[i].includes(letter) && this.rows[i].indexOf(letter) === this.solution.indexOf(letter)) {
        isMatch = true;
        break;
      }
    }

    return isMatch;
  }

}
