import * as fs from 'fs';

export class Task03 {
  constructor(filePath) {
    var fileContent = fs.readFileSync(filePath).toString('utf-8').trimEnd();
    this.input = fileContent.split("\n").map((line) => {
      return line; // Let's keep the binary code as string, so we can iterate over it easily
    });
  }

  #calculateBits(input) {
    // 0 will be handled as -1
    // 1 will be handled as +1
    let result = [];
    input.forEach((line) => {
      [...line].forEach((bit, index) => {
        const currentBit = result[index] || 0;
        if (bit == '0') {
          result[index] = currentBit - 1;
          return;
        }
        result[index] = currentBit + 1;
      })
    });
    return result;
  }

  powerConsumption() {
    const calculated = this.#calculateBits(this.input);
    return this.#calculateGamma(calculated) * this.#calculateEpsilon(calculated);
  }

  #calculateGamma(input) {
    const binary = input.map((calculated) => {
      if (calculated > 0) return 1;
      return 0;
    })
    return parseInt(binary.join(''), 2);
  }

  #calculateEpsilon(input) {
    const binary = input.map((calculated) => {
      if (calculated > 0) return 0;
      return 1;
    })
    return parseInt(binary.join(''), 2);
  }

  lifeSupportRating() {
    return this.#oxygenGeneratorRating(this.input) * this.#co2GeneratorRating(this.input);
  }

  #oxygenGeneratorRating(setOfNumbers) {
    for (let i = 0; i < setOfNumbers[0].length; i++) {
      let calculated = this.#calculateBits(setOfNumbers);
      if (calculated[i] >= 0) { // keep numbers with ones at current position
        setOfNumbers = this.#getNewSetOfBinaryNumbers(setOfNumbers, '1', i);
      } else {
        setOfNumbers = this.#getNewSetOfBinaryNumbers(setOfNumbers, '0', i);
      }
      if (setOfNumbers.length == 1) {
        return parseInt(setOfNumbers[0], 2);
      }
    }
    throw 'Something terrible happened.';
  }

  #co2GeneratorRating(setOfNumbers) {
    for (let i = 0; i < setOfNumbers[0].length; i++) {
      let calculated = this.#calculateBits(setOfNumbers);
      if (calculated[i] < 0) { // keep numbers with zeros at current position
        setOfNumbers = this.#getNewSetOfBinaryNumbers(setOfNumbers, '1', i);
      } else {
        setOfNumbers = this.#getNewSetOfBinaryNumbers(setOfNumbers, '0', i);
      }
      if (setOfNumbers.length == 1) {
        return parseInt(setOfNumbers[0], 2);
      }
    }
    throw 'Something terrible happened.';
  }

  #getNewSetOfBinaryNumbers(currentResult, bit, position) {
    return currentResult.filter((number) => {
      if (number[position] == bit) {
        return number;
      }
    })
  }
}
