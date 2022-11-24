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

  playBingoUntilWin() {
    
  }
}
