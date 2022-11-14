import * as fs from 'fs';
export class Task01 {
  constructor(pathToFile) {
    var fileContent = fs.readFileSync(pathToFile).toString('utf-8');
    this.input = fileContent.split("\n").map((item) => {
      return parseInt(item, 10);
    });
  }

  depthMeasurement() {
    console.log(this.input.length);
    let result = 0;
    for (let index = 1; index < this.input.length; index++) {
      if (this.input[index] > this.input[index-1]) { 
        result++;
      }
    }
    return result;
  }
}
