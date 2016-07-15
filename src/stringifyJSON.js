// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';
  var inner = function (obj) {
    if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null) {
      result += obj;
    } else if (typeof obj === 'string') {
      result += '"' + obj + '"';
    } else if (Array.isArray(obj)) {
      result += '[';
      for (var i = 0; i < obj.length; i++) {
        inner(obj[i]);
        result += ',';
      }
      if (result.charAt(result.length - 1) === ',') {
        result = result.slice(0, -1);
      }
      result += ']';
    } else if (typeof obj === 'object') {
      result += '{';
      for (var key in obj) {
        if (typeof obj[key] !== 'function' && obj[key] !== undefined && typeof key !== 'function' && key !== 'undefined') {
          result += '"' + key + '":';
          inner(obj[key]);
          result += ',';
        }
      }
      if (result.charAt(result.length - 1) === ',') {
        result = result.slice(0, -1);
      }
      result += '}';
    }
  };
  inner(obj);
  return result;
};
