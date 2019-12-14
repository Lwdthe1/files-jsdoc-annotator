"use strict";

//a function for checking if an value is a function
const isArray = function(objToCheck) {
  return (
    (objToCheck &&
      Object.prototype.toString.call(objToCheck) === "[object Array]") ||
    false
  );
};

function removeElementAtIndex(array, index) {
  if (index > -1 && !isEmpty(array)) {
    var element = array[index];
    array.splice(index, 1);
    return element;
  }
  return null;
}

const isEmpty = function(arr) {
  if (!isArray(arr)) return true;
  return arr.length < 1;
};

function groupByValueOf(arr, key) {
  return arr.reduce(function(map, el) {
    (map[el[key]] = map[el[key]] || []).push(el);
    return map;
  }, {});
}

function mapFirstsByValueOf(arr, key, createKeyValueCb) {
  return arr.reduce(function(map, el) {
    if (!map[el[key]]) {
      // set the first occurrence of the object by the key
      // as the value in the map for the provided key
      map[el[key]] = createKeyValueCb ? createKeyValueCb(el, key) : el;
    }

    return map;
  }, {});
}

module.exports = {
  isType: isArray,
  removeElementAtIndex,
  groupByValueOf,
  mapFirstsByValueOf
};
