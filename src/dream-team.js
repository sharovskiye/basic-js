import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(arr) {
  if(!Array.isArray(arr)) return false
  let result=[]
  arr.forEach(element => {if(typeof(element)==='string') result.push(element.trim().charAt(0).toUpperCase()) });
  return result.sort().join('')
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
