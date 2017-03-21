// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {    
    
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }
  
  if (typeof(obj) === 'function') {
    return '';
  }
  
  if (undefined === obj || String(obj) === 'undefined') {
    return '';
  }
  
  if (Array.isArray(obj)) {
    var newArray = obj.map(function(element) {
      return stringifyJSON(element);
    })
    return '[' + newArray + ']';
  }
  
  if (obj === null) {
    return String(obj);
  }
  if (typeof(obj) === 'object') {
    var innerObject = '';
    var tempProp;
    var tempValue;
    for (var prop in obj) {
      tempProp = stringifyJSON(prop);
      if (tempProp === '') {
        continue;
      }
      tempValue = stringifyJSON(obj[prop]);
      if (tempValue === '') {
        continue;
      }
      innerObject += ',' + stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]); 
    }
    innerObject = innerObject.replace(',', '');
    return '{' + innerObject + '}';
  }

  return String(obj);
  
};