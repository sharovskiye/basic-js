import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!(n/1)||typeof(n)!=='string'||n>MODERN_ACTIVITY||n<=0) return false
  return Math.ceil(Math.log(MODERN_ACTIVITY/n)/(0.693/HALF_LIFE_PERIOD))
}
