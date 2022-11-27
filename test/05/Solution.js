import * as fs from 'fs';

export class Solution {
  constructor(filePath) {
    var fileContent = fs.readFileSync(filePath).toString('utf-8').trimEnd();
    this.lines = fileContent.split("\n").map((line) => {
      let coordinates = line.split(' -> ');
      return coordinates.map((coordinate) => {
        let splitted = coordinate.split(',');
        return splitted.map(number => {return parseInt(number, 10)})
      })
    });
    this.canvas = []
    this.canvas[0] = [];
  }

  firstPart() {
     this.drawLines();
     return 1;
  }

  drawLines() {
    this.lines.forEach(([[x1, y1], [x2, y2]]) => {
      if (x1 != x2 && y1 != y2) return; // skip this line; It's not horizontal nor vertical line
      
      // draw in x axis
      if (x2 < x1) [x1, x2] = [x2, x1];
      for (let x = x1; x <= x2; x++) {
        this.drawDot(x, y1);
      }
      
      // draw in y axis
      if (y2 < y1) [y1, y2] = [y2, y1];
      for (let y = y1; y <= y2; y++) {
        this.drawDot(x1, y);
      }
    })
  }

  drawDot(x, y) {
    if (!this.canvas[y]) this.canvas[y] = [];

    if (!this.canvas[y][x]) this.canvas[y][x] = 0;

    this.canvas[y][x] += 1;
  }

  secondPart() {
    return 2;
  }
}
