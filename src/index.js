
exports.min = function min (array) {
  if (typeof array === 'undefined' || array.length === 0 || array === null) {
    return 0;
  } else {
    return Math.min.apply(this, array);
  }
}
/*func.apply(thisArg, [ argsArray]) 
Метод apply() вызывает функцию с указанным значением this и аргументами, предоставленными в виде массива.
Значение this, предоставляемое для вызова функции fun. Обратите внимание, что this может не быть реальным значением, 
видимым этим методом: если метод является функцией в нестрогом режиме, 
значения null и undefined будут заменены глобальным объектом*/

exports.max = function max (array) {
  if (typeof array === 'undefined' || array.length === 0 || array === null) {
    return 0;
  }

  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if (typeof array === 'undefined' || array.length === 0 || array === null) {
    return 0;
  }

  let sum = 0;
  for(let i = 0; i < array.length; i++) {
      sum += array[i];
  }

  return sum / array.length;
}
