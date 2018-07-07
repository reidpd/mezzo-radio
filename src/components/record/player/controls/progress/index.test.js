/*

This document is responsible for housing test files related to the progress bar component.

*/

import expect from 'expect';

import ProgressBar from './index.js';
const progressBarComponent = ProgressBar.WrappedComponent;
console.log(progressBarComponent());
describe('GIVEN the ProgressBar component is correctly imported, ', () => {
  // const progressBarInstance = new ProgressBar;
  // expect(progressBarInstance).to.be.ok;
  describe('AND progressBar.parse_ms() is correctly defined, ', () => {
    // expect(progressBarInstance.parse_ms(1000)).to.be.okay;
    it('WHEN a non-number is entered, THEN the func should return 0 in string format');
    it('WHEN a number less than 10k is entered, THEN the function returns a double-digit str with an initial 0 matching the second duration');
    it('WHEN a number less than 60k is entered, THEN the function returns a double-digit str matching the second duration');
    it('WHEN a number is greater than 60k by X times, THEN the function returns a string containing X minutes');
  });

  describe('AND progressBar.getElapsedTime is correctly defined, ', () => {
    it('WHEN startedAt is undefined, THEN the function returns 0');
    it('WHEN startedAt is NOT undefined, THEN the function returns (stoppedAt - startedAt + baseTime)');
  });
});
