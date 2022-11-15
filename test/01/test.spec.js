import assert from "node:assert";
import { Task01 } from "./Task01.js";
import * as fs from 'fs';
import { it } from "mocha";

describe('Task 01', () => {
  describe('How many measurements are larger than the previous measurement?', () => {
    it('Given example', () => {
      const task = new Task01("./test/01/input-example.txt");
      assert.equal(task.depthMeasurement(), 7);
    });

    it('Solution for my input', () => {
      const task = new Task01("./test/01/input.txt");
      assert.equal(task.depthMeasurement(), 1195);
    });
  });

  describe('How many sums are larger than the previous sum?', () => {
    it('Given example', () => {
      const task = new Task01("./test/01/input-example.txt");
      assert.equal(task.threeMeasurement(), 5);
    });

    it('Solution for my input', () => {
      const task = new Task01("./test/01/input.txt");
      assert.equal(task.threeMeasurement(), 1235);
    });
  });
});
