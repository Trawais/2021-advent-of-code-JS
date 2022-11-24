import * as fs from 'fs';

export class Solution {
  constructor(filePath) {
    var fileContent = fs.readFileSync(filePath).toString('utf-8').trimEnd();
    this.input = fileContent.split("\n").map((line) => {
      return line;
    });
  }

}
