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
     return this.countIntersections();
  }

  drawLines() {
    this.lines.forEach(([[x1, y1], [x2, y2]]) => {
      // draw in x axis
      if (y1 == y2) {
        if (x2 < x1) [x1, x2] = [x2, x1];
        for (let x = x1; x <= x2; x++) {
          this.drawDot(x, y1);
        }
        return;
      }
      
      // draw in y axis
      if (x1 == x2) {
        if (y2 < y1) [y1, y2] = [y2, y1];
        for (let y = y1; y <= y2; y++) {
          this.drawDot(x1, y);
        }
        return;
      }
    })
  }

  drawDot(x, y) {
    if (!this.canvas[y]) this.canvas[y] = [];

    if (!this.canvas[y][x]) this.canvas[y][x] = 0;

    this.canvas[y][x] += 1;
  }

  countIntersections() {
    let sum = 0;
    this.canvas.forEach((row) => {
      row.forEach((col) => {
        if (col > 1) sum++;
      })
    })
    return sum;
  }

  secondPart() {
    return 2;
  }
}
