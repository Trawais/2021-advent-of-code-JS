import assert from 'node:assert';
import { Solution } from './Solution.js'

describe('Task {{ .Env.TASK }}', () => {
  describe('Text description of first part goes here', () => {
    it('Given example', () => {
      const solution = new Solution('./test/{{ .Env.TASK }}/input-example.txt');
      assert.equal(solution.firstPart(), 123);
    });

    it('Solution for the first part', () => {
      const solution = new Solution('./test/{{ .Env.TASK }}/input.txt');
      assert.equal(solution.firstPart(), 456);
    });
  });

  describe('Text description of second part goes here', () => {
    it('Given example', () => {
      const solution = new Solution('./test/{{ .Env.TASK }}/input-example.txt');
      assert.equal(solution.firstPart(), 123);
    });

    it('Solution for the second part', () => {
      const solution = new Solution('./test/{{ .Env.TASK }}/input.txt');
      assert.equal(solution.firstPart(), 456);
    });
  });
});
