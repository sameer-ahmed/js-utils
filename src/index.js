/*
 * @Author: Sameer Ahmed 
 * @Date: 2018-01-15 16:18:05 
 * @Last Modified by: Sameer Ahmed
 * @Last Modified time: 2018-02-01 16:18:02
 */

export const isNotNumeric = (value) => {
    if (isUndefinedOrNullOrEmpty(value)) {
        return true
    }
    return isNaN(Number(value))
}

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
    return isUndefinedOrNullOrEmpty(value) || isEmptyObject(value) || isUndefinedOrNullOrEmptyList(value)
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
    console.log("Call to function took " + (t1 - t0) + " milliseconds.")
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
export const isImage = (fileName) => {
    let mimeType = getMimeTypeFromExtension(getFileExtensionFromName(fileName))
    return (
        !isUndefinedOrNullOrEmpty(mimeType) &&
        mimeType.startsWith('image')
    )
}
export const sleep = async (ms) => {
    await new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
export const shallowEqual = (objA, objB) => {
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

  export const isValidDate = (date) => {
    if (date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)) {
        return true
    }
    return false
  }

  export const getStartOfDay = (date) => {
    if (!isValidDate(date)) {
        throw new Error('`date` is not a valid `Date` object')
    }
    if (Object.prototype.toString.call(date) !== '[object Date]') {
        date = new Date(date);
    }
    var startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return startOfDay;
}

export const getEndOfDay = (date) => {
    if (!isValidDate(date)) {
        throw new Error('`date` is not a valid `Date` object')
    }
    var startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return new Date(startOfDay.getTime() + 86399999);
}