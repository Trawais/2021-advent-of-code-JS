import assert from 'node:assert';
import { Task02 } from './Task02.js'

describe('Task 02', () => {
  describe('What do you get if you multiply your final horizontal position by your final depth?', () => {
    it('Given example', () => {
      const task02 = new Task02('./test/02/input-example.txt');
      assert.equal(task02.multiplyPositionAndDepth(), 150);
    });

    it('Solution for the first part', () => {
      const task02 = new Task02('./test/02/input.txt');
      assert.equal(task02.multiplyPositionAndDepth(), 1947824);
    });
  });
  
  describe('Calculate with the aim', () => {
    it('Given example', () => {
      const task02 = new Task02('./test/02/input-example.txt');
      assert.equal(task02.calculateWithAim(), 900);
    });

    it('Solution for the second part', () => {
      const task02 = new Task02('./test/02/input.txt');
      assert.equal(task02.calculateWithAim(), 1813062561);
    });
  });
});
