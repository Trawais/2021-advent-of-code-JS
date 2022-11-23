import assert from 'node:assert';
import { Task03 } from './Task03.js'

describe('Task 03', () => {
  describe('What is the power consumption of the submarine?', () => {
    it('Given example', () => {
      const task = new Task03('./test/03/input-example.txt');
      assert.equal(task.powerConsumption(), 198);
    });

    it('Solution for the first part', () => {
      const task = new Task03('./test/03/input.txt');
      assert.equal(task.powerConsumption(), 3885894);
    });
  });
  
  describe('What is the life support rating of the submarine?', () => {
    it('Given example', () => {
      const task = new Task03('./test/03/input-example.txt');
      assert.equal(task.lifeSupportRating(), 230);
    });

    it('Solution for the second part', () => {
      const task = new Task03('./test/03/input.txt');
      assert.equal(task.lifeSupportRating(), 4375225);
    });
  });
});
