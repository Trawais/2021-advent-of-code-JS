import assert from 'node:assert';
import { Solution } from './Solution.js'

describe('Task 04', () => {
  describe('What is the power consumption of the submarine?', () => {
    it('Given example', () => {
      const solution = new Solution('./test/04/input-example.txt');
      solution.playBingoUntilWin();
      //assert.equal(solution.firstPart(), 4512);
    });

    // it('Solution for the first part', () => {
    //   const task = new Solution('./test/04/input.txt');
    //   assert.equal(task.firstPart(), 456);
    // });
  });
});
