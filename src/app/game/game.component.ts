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

  }

  isLetterMatch(letter: string): boolean {
    let isMatch = false;
    

    return isMatch;
  }

  isGuess(letter: string): boolean {
    let isGuess = false;
    

    return isGuess;
  }

  isPositionMatch(letter: string): boolean {
    let isMatch = false;
    

    return isMatch;
  }

}
