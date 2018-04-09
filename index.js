/*
 * @Author: Sameer Ahmed 
 * @Date: 2018-01-15 16:18:05 
 * @Last Modified by: Sameer Ahmed
 * @Last Modified time: 2018-04-09 15:33:46
 */

export const isBoolean = (value) => {
    return typeof value == 'boolean'
}

export const isNumber = (value) => {
    return typeof value == 'number'
}

export const isFunction = (value) => {
    return typeof value == "function"
}

export const isUndefined = (value) => {
    return typeof value == 'undefined'
}

export const isObejct = (value) => {
    return typeof value == 'object'
}

export const isNull = (value) => {
    return value === null
}

export const isEmpty = (value) => {
    return value === ''
}

export const isEmptyList = (value) => {
    return value.length === 0
}

export const isEmptyObject = (value) => {

    if (value === null) {
        return true
    }

    if (isBoolean(value) || isNumber(value) || isFunction(value)) {
        return false
    }

    if (value instanceof Set && !isUndefined(value.size) && value.size != 0) {
        return false
    }

    return Object.keys(value).length === 0
}

export const isUndefinedOrNull = (value) => {
    return isUndefined(value) || isNull(value)
}

export const isUndefinedOrNullOrEmpty = (value) => {
    return isUndefinedOrNull(value) || isEmpty(value)
}

export const isUndefinedOrNullOrEmptyObject = (value) => {
    return isUndefinedOrNullOrEmpty(value) || isEmptyObject(value);
}

export const isUndefinedOrNullOrEmptyList = (value) => {
    return isUndefinedOrNull(value) || isEmptyList(value)
}

export const isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList = (value) => {
    return isUndefinedOrNullOrEmpty(value) || isEmptyObject(obj) || isUndefinedOrNullOrEmptyList(value)
}

export const copy = (value) => {
    return Object.assign({}, value)
}

export const logPerformance = (func, args) => {
    if (typeof func != 'function') {
        throw ('A valid javascript function required, for logging performance')
    }

    let t0 = performance.now();
    func.apply(this, args)
    let t1 = performance.now();
    console.tron.log("Call to function took " + (t1 - t0) + " milliseconds.")
}

export const definePropertyDeep = (target, key, property, { writable = true, enumerable = true, configurable = true }) => {
    Object.defineProperty(target, key, {
        value: !isNull(property) && isObejct(property) ? (function () {
            let deepObject = {}
            Object.keys(property).forEach((key) => {
                deepObject[key] = definePropertyDeep(deepObject, key, property[key], { writable: writable, enumerable: enumerable, configurable: configurable })
            })
            return deepObject
        }()) : property,
        writable: writable,
        enumerable: enumerable,
        configurable: configurable
    })
    return target
}

export const definePropertiesDeep = (target = {}, propertyDefinations) => {

    Object.keys(propertyDefinations).forEach((key) => {
        let defination = propertyDefinations[key];
        definePropertyDeep(target, key, defination.value, { writable: defination.writable, enumerbale: defination.enumerbale, configurable: defination.configurable })
    })

    return target;
}

export const getFileExtensionFromName = (fileName) => {
    let fileNameParts = fileName.split('.')
    return (fileNameParts.length > 0) ? fileNameParts.pop() : null
}

export const getMimeTypeFromExtension = (extension) => {
    let mimeType = null
    switch (extension.toLowerCase()) {
        case 'doc':
            mimeType = 'application/msword'
            break
        case 'pdf':
            mimeType = 'application/pdf'
            break
        case 'xlsx':
        case 'xls':
            mimeType = 'application/vnd.ms-excel'
            break
        case 'jpg':
        case 'jpeg':
            mimeType = 'image/jpg'
            break
        case 'png':
            mimeType = 'image/png'
            break
        case 'gif':
            mimeType = 'image/gif'

    }

    return mimeType
}

export const getIconTypeFromMimeType = (mimeType) => {
    let iconType = null
    switch (mimeType) {
        case 'application/msword':
        case 'application/pdf':
        case 'application/vnd.ms-excel':
            iconType = 'description'
            break
        case 'image/jpg':
        case 'image/png':
        case 'image/gif':
            iconType = null
    }

    return iconType
}

export const isImage = (fileName) => {
    let mimeType = this.getMimeTypeFromExtension(
        this.getFileExtensionFromName(fileName))
    return (
        !this.isUndefinedOrNullOrEmpty(mimeType) &&
        mimeType.startsWith('image')
    )
}
export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const debounce = (functionTobeCalled, interval = 600) => {
    let isCalled = false, timer
    return (...args) => {
        if (!isCalled) {
            isCalled = true
            clearTimeout(timer)
            timer = setTimeout(() => {
                isCalled = false
            }, interval)
            return functionTobeCalled(...args)
        }
        return
    }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
export const shallowEqual = (objA: mixed, objB: mixed): boolean => {
    if (objA === objB) {
      return true;
    }
  
    if (typeof objA !== 'object' || objA === null ||
        typeof objB !== 'object' || objB === null) {
      return false;
    }
  
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
  
    if (keysA.length !== keysB.length) {
      return false;
    }
  
    // Test for A's keys different from B.
    var bHasOwnProperty = hasOwnProperty.bind(objB);
    for (var i = 0; i < keysA.length; i++) {
      if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
        return false;
      }
    }
  
    return true;
  }

  // Can use this method instead of Object.keys(obj).length
  // As Object.keys(ojb) will consume more memory and cpu for creating and returning key array
  // if includedNonEnumrable = true it will behave as default javascript, performance benifit only works with includedNonEnumrable = false value
  
  export const countKeys = (obj = {}, { includedNonEnumrable = false } = { includedNonEnumrable: false }) => {
    if (includedNonEnumrable) {
      return Object.getOwnPropertyNames(obj).length
    }

    let count = 0
    for (let key in obj) {
      count++
    }

    return count
}

// Can use this method instead of Object.keys(obj) and mapping function over returned keys array
// As Object.keys(ojb) will consume more memory and cpu for creating and returning key array
// if includedNonEnumrable = true it will behave as default javascript, performance benifit only works with includedNonEnumrable = false value

export const onEachKey = (obj = {}, callback = (key) => ({}), { includedNonEnumrable = false } = { includedNonEnumrable: false }) => {
    let keys = null
  if (includedNonEnumrable) {
      keys = obj.getOwnPropertyNames()
  }

  let it = keys !== null ? keys : obj
  for (let key in it) {
      callback(key)
  }
}
