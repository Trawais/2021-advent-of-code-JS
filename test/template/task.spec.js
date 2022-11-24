import assert from 'node:assert';
import { Solution } from './Solution.js'

describe('Task XX', () => {
  describe('What is the power consumption of the submarine?', () => {
    it('Given example', () => {
      const task = new Solution('./test/XX/input-example.txt');
      assert.equal(task.firstPart(), 123);
    });

    it('Solution for the first part', () => {
      const task = new Solution('./test/XX/input.txt');
      assert.equal(task.firstPart(), 456);
    });
  });
});
