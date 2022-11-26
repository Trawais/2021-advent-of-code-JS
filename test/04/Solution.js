import * as fs from 'fs';

export class Solution {
  constructor(filePath) {
    this.bingos = [];
    
    let bingoCardsCount = -1; // because there is one extra empty line in the beginning
    let bingoCardRowIndex = 0;


    const fileContent = fs.readFileSync(filePath).toString('utf-8').trimEnd();
    fileContent.split("\n").forEach((line, index) => {
      if (index == 0) {
        this.input = line.split(',');
        return;
      }

      if (!line) { // line is empty
        bingoCardsCount++;
        bingoCardRowIndex = 0;
        return;
      }

      if (!this.bingos[bingoCardsCount]) {
        this.bingos[bingoCardsCount] = [];
      }

      this.bingos[bingoCardsCount][bingoCardRowIndex] = line.trim().split(/\s+/);
      bingoCardRowIndex++;
    });
  }

  firstPart() {
    const winner = undefined;
    for (let i = 0; i < this.input.length; i++) {
      this.playNumber(this.input[i]);
      const winner = this.getWinner();
      if (typeof winner != 'undefined') {
        return this.input[i] * this.sumOfBingo(this.bingos[winner]);
      }
    }
  }

  secondPart() {
    let winnerCard = undefined;
    let lastWinningCard = [];
    let lastNumber = undefined;
    for (let i = 0; i < this.input.length; i++) {
      this.playNumber(this.input[i]);
      winnerCard = this.removeAllWinnersAndReturnLast();
      if (typeof winnerCard != 'undefined') { // Some bingo card is winning
        lastWinningCard = winnerCard
        if (this.bingos.length == 0) {
          lastNumber = this.input[i];
          break;
        }
      }
    }
    lastNumber ??= this.input[this.input.length - 1];
    return lastNumber * this.sumOfBingo(lastWinningCard);
  }

  removeAllWinnersAndReturnLast() {
    let winner = undefined;
    let lastWinnerCard = undefined;
    do {
      winner = this.getWinner();
      if (typeof winner != 'undefined') {
        lastWinnerCard = JSON.parse(JSON.stringify(this.bingos[winner]))
        this.bingos.splice(winner, 1);
      }
    } while (typeof winner != 'undefined');
    return lastWinnerCard;
  }

  sumOfBingo(winnerCard) {
    let sum = 0;
    winnerCard.forEach((row) => {
      row.forEach((el) => {
        if (el != 'X') {
          sum += parseInt(el, 10);
        }
      })
    })
    return sum;
  }

  playNumber(number) {
    for (let bingoCard = 0; bingoCard < this.bingos.length; bingoCard++) {
      for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
          if (this.bingos[bingoCard][row][col] == number) {
            this.bingos[bingoCard][row][col] = 'X';
          }
        }
      }
    }
  }

  getWinner() {
    for (let bingoCard = 0; bingoCard < this.bingos.length; bingoCard++) {
      const bingo = this.bingos[bingoCard];
      // check rows
      for (let row = 0; row < 5; row++) {
        if (bingo[row].join('') == 'XXXXX') return bingoCard;
      }
      // check columns
      for (let col = 0; col < 5; col++) {
        const tempColumn = bingo.map((row) => {
          return row[col];
        });
        if (tempColumn.join('') == 'XXXXX') return bingoCard;
      }
    }
    return undefined;
  }
}
