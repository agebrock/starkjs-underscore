var _ = require('underscore');

/**
 * Returns a lowercase string based on the primitive type of a given value.
 *
 * @param value
 * @returns {undefined|null|string|nan|number|boolean|date|function|array|object}
 */
function getType(value){
    var type;
    if(_.isUndefined(value)){
        type = 'undefined';
    }else if(_.isNull(value)){
        type = 'null';
    }else if(_.isString(value)){
        type = 'string';
    }else if(_.isNaN(value)){
        type = 'nan';
    }else if(_.isNumber(value)){
        type = 'number';
    }else if(_.isBoolean(value)){
        type = 'boolean';
    }else if(_.isDate(value)){
        type = 'date';
    }else if(_.isRegExp(value)){
        type = 'regexp';
    }else if(_.isFunction(value)){
        type = 'function';
    }else if(_.isArray(value)){
        type = 'array';
    }else if(_.isObject(value)){
        type = 'object';
    }
    return type;
}

/**
 *
 * Checks a value is undefined or null
 *
 * @param value
 * @returns {boolean}
 */
function isDefined(value){
    return getType(value) !== 'null' && getType(value) !== 'undefined';
}

_.mixin({
    getType: getType,
    isDefined: isDefined
});

module.exports = _;
