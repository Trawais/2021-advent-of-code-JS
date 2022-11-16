import * as fs from 'fs';

export class Task02 {
  constructor(filePath) {
    var fileContent = fs.readFileSync(filePath).toString('utf-8').trimEnd();
    this.input = fileContent.split("\n").map((line) => {
      const parsed = line.split(' ');
      return [parsed[0], parseInt(parsed[1], 10)];
    });
  }

  multiplyPositionAndDepth() {
    let position = 0;
    let depth = 0;
    this.input.forEach((command) => {
      switch (command[0]) {
        case 'forward':
          position += command[1];
          break;
        
        case 'up':
          depth -= command[1];
          break;

        case 'down':
          depth += command[1];
          break;
      
        default:
          throw 'Given command is not supported';
      }
    });
    return position * depth;
  }

  calculateWithAim() {
    let position = 0;
    let depth = 0;
    let aim = 0;
    this.input.forEach((command) => {
      switch (command[0]) {
        case 'forward':
          position += command[1];
          depth += aim * command[1];
          break;
        
        case 'up':
          aim -= command[1];
          break;

        case 'down':
          aim += command[1];
          break;
      
        default:
          throw 'Given command is not supported';
      }
    });
    return position * depth;
  }
}
