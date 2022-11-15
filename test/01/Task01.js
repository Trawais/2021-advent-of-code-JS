import * as fs from 'fs';
export class Task01 {
  constructor(pathToFile) {
    var fileContent = fs.readFileSync(pathToFile).toString('utf-8');
    this.input = fileContent.split("\n").map((item) => {
      return parseInt(item, 10);
    });
  }

  depthMeasurement() {
    let result = 0;
    for (let index = 1; index < this.input.length; index++) {
      if (this.input[index] > this.input[index-1]) { 
        result++;
      }
    }
    return result;
  }

  threeMeasurement() {
    let result = 0;
    for (let i = 3; i < this.input.length; i++) {
      const firstGroup = this.input[i-3] + this.input[i-2] + this.input[i-1];
      const secondGroup = this.input[i-2] + this.input[i-1] + this.input[i-0];
      if (secondGroup > firstGroup) {
        result++;
      }
    }
    return result;
  }
}
