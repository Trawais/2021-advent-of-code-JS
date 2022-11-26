import assert from 'node:assert';
import { Solution } from './Solution.js'

describe('Task 04', () => {
  describe('What will your final score be if you choose that board?', () => {
    it('Given example', () => {
      const solution = new Solution('./test/04/input-example.txt');
      assert.equal(solution.firstPart(), 4512);
    });

    it('Solution for the first part', () => {
      const solution = new Solution('./test/04/input.txt');
      assert.equal(solution.firstPart(), 55770);
    });
  });

  describe('Last bingo card wins, what would its final score be?', () => {
    it('Given example', () => {
      const solution = new Solution('./test/04/input-example.txt');
      assert.equal(solution.secondPart(), 1924);
    });

    it('Solution for the first part', () => {
      const solution = new Solution('./test/04/input.txt');
      assert.equal(solution.secondPart(), 2980);
    });
  });
});
