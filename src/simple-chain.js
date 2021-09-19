import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
// let chainMaker = { 
  result: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.result.length
  },
    addLink(v){
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      this.result.push(`( ${v} )`)

      // console.log(this.result);
      return this
    },
      removeLink(p) {
        // console.log( (Number.isInteger(p) || p > this.result.length));
  if (!Number.isInteger(p) || p > this.result.length||p<1) {
    this.result = []
    throw new Error(`You can't remove incorrect link!`)
  }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  this.result=this.result.filter((elem,i)=>i!==p-1)
  return this
},
reverseChain() {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  this.result = this.result.reverse()
  return this
},
finishChain() {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let box=this.result.join('~~')
  this.result=[]
  return box
}
};

// console.log(chainMaker.result.push('lol'));
// console.log(chainMaker.result.push('kek'));
// console.log(chainMaker.addLink('GHI'));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0));
// console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain());
// console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2));


// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())
// console.log(chainMaker.result);