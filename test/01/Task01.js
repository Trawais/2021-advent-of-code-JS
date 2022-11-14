export class Task01 {
  constructor(input) {
    this.input = input;
  }

  depthMeasurement() {
    let result = 0;
    for (let index = 1; index < this.input.length; index++) {
      if (this.input[index-1] < this.input[index]) result++;
    }
    return result;
  }
}
