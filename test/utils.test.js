// import { 
//     isEmptyObject,
//     isUndefinedOrNull,
//     isUndefinedOrNullOrEmpty,
//     isUndefinedOrNullOrEmptyObject,
//     isUndefinedOrNullOrEmptyList,
//     isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList,
//     copy,
//     logPerformance,
//     definePropertyDeep,
//     definePropertiesDeep,
//     getFileExtensionFromName,
//     isImage,
//     sleep,
//     debounce,
//     shallowEqual,
//     isValidDate,
//     getStartOfDay,
//     getEndOfDay,
//  } from "../lib/index"

const lib = require('../lib/index')
/****************** isNotNumeric */
test('Check 1.2.3 is not numaric', () => {
    expect(lib.isNotNumeric('1.2.3')).toBe(true)
  })

test('Check 1.2 is numaric', () => {
    expect(lib.isNotNumeric('1.2')).toBe(false)
  })

test('Check 1a2a is not numaric', () => {
    expect(lib.isNotNumeric('1a2a')).toBe(true)
  })
/****************** isNotNumeric */


/****************** isBoolean */
test('Check 1a2a is not boolean', () => {
    expect(lib.isBoolean('1a2a')).toBe(false)
})
test('Check true is boolean', () => {
    expect(lib.isBoolean(true)).toBe(true)
})
test('Check false is boolean', () => {
    expect(lib.isBoolean(false)).toBe(true)
})
/****************** isBoolean */

/****************** isFunction */
test('Check `randomString` is not function', () => {
    expect(lib.isFunction('randomString')).toBe(false)
})
test('Check `randomObject` is not function', () => {
    expect(lib.isFunction({a: 'a'})).toBe(false)
})
test('Check if  function', () => {
    expect(lib.isFunction(() => ({}))).toBe(true)
})
/****************** isFunction */

/****************** isUndefined */
test('Check `randomString` is not undefined', () => {
    expect(lib.isUndefined('randomString')).toBe(false)
})
test('Check empty object is not undefined', () => {
    expect(lib.isUndefined({})).toBe(false)
})
test('Check if undefined', () => {
    const obj = {}
    expect(lib.isUndefined(obj.a)).toBe(true)
})
/****************** isUndefined */

/****************** isObejct */
test('Check `randomString` is not obejct', () => {
    expect(lib.isObejct('randomString')).toBe(false)
})
test('Check empty object is a obejct', () => {
    expect(lib.isObejct({})).toBe(true)
})
test('Check if undefined is not a object', () => {
    const obj = {}
    expect(lib.isObejct(obj.a)).toBe(false)
})
/****************** isObejct */

/****************** isNull */
test('Check if null', () => {
    expect(lib.isNull(null)).toBe(true)
})
test('Check empty object is not null', () => {
    expect(lib.isNull({})).toBe(false)
})
test('Check if undefined is not null', () => {
    const obj = {}
    expect(lib.isNull(obj.a)).toBe(false)
})
/****************** isNull */

/****************** isEmpty */
test('Check if null is not empty', () => {
    expect(lib.isEmpty(null)).toBe(false)
})
test('Check empty object is not isEmpty', () => {
    expect(lib.isEmpty({})).toBe(false)
})
test('Check if undefined is not isEmpty', () => {
    const obj = {}
    expect(lib.isEmpty(obj.a)).toBe(false)
})
test('Check if "" is isEmpty', () => {
    const obj = {}
    expect(lib.isEmpty('')).toBe(true)
})
/****************** isEmpty */

/****************** isEmptyList */
test('Check empty object is not isEmptyList', () => {
    expect(lib.isEmptyList({})).toBe(false)
})
test('Check if [] is isEmptyList', () => {
    expect(lib.isEmptyList([])).toBe(true)
})
test('Check if new Array() is isEmptyList', () => {
    expect(lib.isEmptyList(new Array())).toBe(true)
})
/****************** isEmptyList */


