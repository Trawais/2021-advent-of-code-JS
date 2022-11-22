import * as fs from 'fs';

export class Task03 {
  constructor(filePath) {
    var fileContent = fs.readFileSync(filePath).toString('utf-8').trimEnd();
    this.input = fileContent.split("\n").map((line) => {
      return line; // Let's keep the binary code as string, so we can iterate over it easily
    });
  }

  powerConsumption() {
    // 0 will be handled as -1
    // 1 will be handled as +1
    let result = [];
    this.input.forEach((line) => {
      [...line].forEach((bit, index) => {
        const currentBit = result[index] || 0;
        if (bit == '0') {
          result[index] = currentBit - 1;
        } else { // bit = '1'
          result[index] = currentBit + 1;
        }
      })
    });
    return this.calculateGamma(result) * this.calculateEpsilon(result);
  }

  calculateGamma(input) {
    const binary = input.map((calculated) => {
      if (calculated > 0) return 1;
      return 0;
    })
    return parseInt(binary.join(''), 2);
  }

  calculateEpsilon(input) {
    const binary = input.map((calculated) => {
      if (calculated > 0) return 0;
      return 1;
    })
    return parseInt(binary.join(''), 2);
  }

  lifeSupportRating() {
    return 0;
  }
}
