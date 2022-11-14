import assert from "node:assert";
import { Task01 } from "./Task01.js";
import * as fs from 'fs';

describe('Task 01', () => {
  describe('Given example', () => {
    it('How many measurements are larger than the previous measurement?', () => {
      var fileContent = fs.readFileSync("./mytext.txt");
      var textByLine = fileContent.split("\n")
      const task = new Task01(input);
      assert.equal(task.depthMeasurement(input), 7);
    });
  });
});
