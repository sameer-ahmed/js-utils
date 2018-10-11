// import { 
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

const moment = require('moment')
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

/****************** isEmptyObject */
test('Check empty object is empty object', () => {
    expect(lib.isEmptyObject({})).toBe(true)
})
test('Check if null is isEmptyObject', () => { // need to fix 
    expect(lib.isEmptyObject(null)).toBe(true)
})
/****************** isEmptyObject */

/****************** isUndefinedOrNull */
test('Check empty object is not UndefinedOrNull', () => {
    expect(lib.isUndefinedOrNull({})).toBe(false)
})
test('Check if null isUndefinedOrNull', () => { // need to fix 
    expect(lib.isUndefinedOrNull(null)).toBe(true)
})
test('Check if undefined isUndefinedOrNull', () => { // need to fix 
    const obj = {}
    expect(lib.isUndefinedOrNull(obj.a)).toBe(true)
})
/****************** isUndefinedOrNull */

/****************** isUndefinedOrNullOrEmpty */
test('Check empty object is not isUndefinedOrNullOrEmpty', () => {
    expect(lib.isUndefinedOrNullOrEmpty({})).toBe(false)
})
test('Check if null isUndefinedOrNullOrEmpty', () => { // need to fix 
    expect(lib.isUndefinedOrNullOrEmpty(null)).toBe(true)
})
test('Check if undefined isUndefinedOrNullOrEmpty', () => { // need to fix 
    const obj = {}
    expect(lib.isUndefinedOrNullOrEmpty(obj.a)).toBe(true)
})
test('Check if "" isUndefinedOrNullOrEmpty', () => { // need to fix 
    expect(lib.isUndefinedOrNullOrEmpty('')).toBe(true)
})
test('Check if "ranodm" is not isUndefinedOrNullOrEmpty', () => { // need to fix 
    expect(lib.isUndefinedOrNullOrEmpty('ranodm')).toBe(false)
})
/****************** isUndefinedOrNullOrEmpty */

/****************** isUndefinedOrNullOrEmptyObject */
test('Check empty object is isUndefinedOrNullOrEmptyObject', () => {
    expect(lib.isUndefinedOrNullOrEmptyObject({})).toBe(true)
})
test('Check if null isUndefinedOrNullOrEmptyObject', () => { // need to fix 
    expect(lib.isUndefinedOrNullOrEmptyObject(null)).toBe(true)
})
test('Check if undefined isUndefinedOrNullOrEmptyObject', () => { // need to fix 
    const obj = {}
    expect(lib.isUndefinedOrNullOrEmptyObject(obj.a)).toBe(true)
})
test('Check if "" is not isUndefinedOrNullOrEmptyObject', () => { // need to fix 
    expect(lib.isUndefinedOrNullOrEmptyObject('')).toBe(true)
})
test('Check if "ranodm" is not isUndefinedOrNullOrEmptyObject', () => { // need to fix 
    expect(lib.isUndefinedOrNullOrEmptyObject('ranodm')).toBe(false)
})
test('Check if "ranodmObject" is not isUndefinedOrNullOrEmptyObject', () => { // need to fix 
    const obj = { a: '' }
    expect(lib.isUndefinedOrNullOrEmptyObject(obj)).toBe(false)
})
/****************** isUndefinedOrNullOrEmptyObject */

/****************** isUndefinedOrNullOrEmptyList */
test('Check empty object is not isUndefinedOrNullOrEmptyList', () => {
    expect(lib.isUndefinedOrNullOrEmptyList({})).toBe(false)
})
test('Check if null isUndefinedOrNullOrEmptyList', () => { // need to fix 
    expect(lib.isUndefinedOrNullOrEmptyList(null)).toBe(true)
})
test('Check if undefined isUndefinedOrNullOrEmptyList', () => { // need to fix 
    const obj = {}
    expect(lib.isUndefinedOrNullOrEmptyList(obj.a)).toBe(true)
})
test('Check if "" is not isUndefinedOrNullOrEmptyList', () => { // need to fix 
    expect(lib.isUndefinedOrNullOrEmptyList('')).toBe(true)
})
test('Check if "ranodm" is not isUndefinedOrNullOrEmptyList', () => { // need to fix 
    expect(lib.isUndefinedOrNullOrEmptyList('ranodm')).toBe(false)
})
test('Check if "ranodmObject" is not isUndefinedOrNullOrEmptyList', () => { // need to fix 
    const obj = { a: '' }
    expect(lib.isUndefinedOrNullOrEmptyList(obj)).toBe(false)
})
test('Check if [] is not isUndefinedOrNullOrEmptyList', () => { // need to fix 
    expect(lib.isUndefinedOrNullOrEmptyList([])).toBe(true)
})
test('Check if ["a"] is not isUndefinedOrNullOrEmptyList', () => { // need to fix 
    expect(lib.isUndefinedOrNullOrEmptyList(['a'])).toBe(false)
})
/****************** isUndefinedOrNullOrEmptyList */

/****************** isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList */
test('Check empty object is isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList', () => {
    expect(lib.isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList({})).toBe(true)
})
test('Check if null isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList', () => { // need to fix 
    expect(lib.isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList(null)).toBe(true)
})
test('Check if undefined isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList', () => { // need to fix 
    const obj = {}
    expect(lib.isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList(obj.a)).toBe(true)
})
test('Check if "" is not isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList', () => { // need to fix 
    expect(lib.isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList('')).toBe(true)
})
test('Check if "ranodm" is not isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList', () => { // need to fix 
    expect(lib.isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList('ranodm')).toBe(false)
})
test('Check if "ranodmObject" is not isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList', () => { // need to fix 
    const obj = { a: '' }
    expect(lib.isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList(obj)).toBe(false)
})
test('Check if [] is not isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList', () => { // need to fix 
    expect(lib.isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList([])).toBe(true)
})
test('Check if ["a"] is not isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList', () => { // need to fix 
    expect(lib.isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList(['a'])).toBe(false)
})
/****************** isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList */

/****************** copy */
test('Check if can copy or not', () => {
    const obj = { a: { b: { c: { d: { e: 'f' } } } } }
    expect(obj === lib.copy(obj)).toBe(false)
})
/****************** copy */

/****************** isImage */
test('Check some.jpeg is image', () => {
    expect(lib.isImage('some.jpeg')).toBe(true)
})
/****************** isImage */

/****************** getFileExtensionFromName */
test('Check some.jpeg yeild .jpeg', () => {
    expect(lib.getFileExtensionFromName('some.jpeg')).toBe('jpeg')
})
test('Check some yeild some', () => {
    expect(lib.getFileExtensionFromName('some')).toBe('some')
})
/****************** getFileExtensionFromName */

/****************** sleep */
test('Check if it actually sleeps', async () => {
    const time = new Date().getTime()
    await lib.sleep(2000)
    expect(new Date().getTime() - time).toBeGreaterThanOrEqual(2000)
})
/****************** sleep */

/****************** shallowEqual */
test('Check if it actually shallowEqual', () => {
    const a = { b: { c: 'd'}, e: { f: { g: 'h' } } }
    const b = { b: a.b, e: a.e }
    a['e']['g'] = 'k'
    expect(lib.shallowEqual(a, b)).toBe(true)
})
test('Check if not shallowEqual', () => {
    const a = { b: { c: 'd'}, e: { f: { g: 'h' } } }
    const b = { b: a.b, e: Object.assign({}, a.e) }
    expect(lib.shallowEqual(a, b)).toBe(false)
})
/****************** shallowEqual */

/****************** isValidDate */
test('Check if it isValidDate', () => {
    expect(lib.isValidDate(new Date())).toBe(true)
})
test('Check if timestamp is not isValidDate', () => {
    expect(lib.isValidDate(new Date().getTime())).toBe(false)
})
test('Check if null is not isValidDate', () => {
    expect(lib.isValidDate(null)).toBe(false)
})
test('Check if undefined is not isValidDate', () => {
    expect(lib.isValidDate()).toBe(false)
})
test('Check if string is not isValidDate', () => {
    expect(lib.isValidDate('sameer')).toBe(false)
})
test('Check if object is not isValidDate', () => {
    expect(lib.isValidDate({ b: { c: 'd'}, e: { f: { g: 'h' } } })).toBe(false)
})
/****************** isValidDate */

/****************** getStartOfDay */
test('Check if getStartOfDay is working', () => {
    expect(lib.getStartOfDay(new Date()).getTime()).toBe(moment().startOf('day').toDate().getTime())
})
/****************** getStartOfDay */

/****************** getEndOfDay */
test('Check if getStartOfDay is working', () => {
    expect(lib.getEndOfDay(new Date()).getTime()).toBe(moment().endOf('day').toDate().getTime())
})
/****************** getEndOfDay */

/****************** convertToCamleCase */
test('Check if convertToCamleCase working', () => {
    expect(lib.convertToCamleCase('SAMEER_AHMED_SHEIKH')).toBe('Sameer Ahmed Sheikh')
    expect(lib.convertToCamleCase('SAMEER_AHMED_SHEIKH', '_', '&&')).toBe('Sameer&&Ahmed&&Sheikh')
    expect(lib.convertToCamleCase('SAMEER$$AHMED$$SHEIKH', '$$', '_')).toBe('Sameer_Ahmed_Sheikh')
    expect(lib.convertToCamleCase('', '$$', '_')).toBe('')
    expect(lib.convertToCamleCase('')).toBe('')
})
/****************** getEndOfDay */


