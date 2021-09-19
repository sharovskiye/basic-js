import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

//  Ваша задача — реализовать функцию `repeater(str, options)`.
//  Эта функция возвращает повторяющуюся **строку**, основываясь на заданных параметрах:
//  *	`str` это **строка**, которая будет повторена
//  *	`options` это **объект** опций, который содержит следующие свойства:
//    -	`repeatTimes` устанавливает число повторений `str`
//    - `separator` это строка, разделяющая повторения `str`
//    - `addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
//    - `additionRepeatTimes` устанавливает число повторений `addition`
//    - `additionSeparator` это строка, разделяющая повторения `addition`
 
//  Параметры `str` и `addition` по умолчанию являются **строками**. В случае, если они другого типа, он должны быть преобразованы к строке.
  
//  Параметры `separator` и `additionSeparator` являются строками.
 
//  `repeatTimes` и `additionRepeatTimes` являются целыми числами (в случае отсутствия любого из них соответствующая строка не повторяется).
 
//  Единственный обязательный параметр — это `str`, остальные могут не быть переданы.
//  Значение `separator` по умолчанию это `'+'`. Значение `additionSeparator` по умолчанию это `'|'`.
 
//  Например: `repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })` => `'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'`

export default function repeater(str, options) {
  
  let repeatTimes= options.repeatTimes?''+options.repeatTimes: 1
    let separator = options.separator?''+options.separator: '+'
    let addition = options.addition!==undefined?''+options.addition:''
    let additionRepeatTimes = options.additionRepeatTimes?options.additionRepeatTimes:1
    let additionSeparator = options.additionSeparator?''+options.additionSeparator: '|'
  let result=[]
    for (let i = 0; i < repeatTimes; i++) {
      result.push(''+str)
      for (let y = 0; y < additionRepeatTimes; y++) {
        result.push(addition)
        if(y<additionRepeatTimes-1) result.push(additionSeparator)
        
      }
      if(i<repeatTimes-1) result.push(separator)
      
    }
return result.join('')
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
