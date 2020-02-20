
exports.min = function min (array) {
    //console.log("KUKU " + ); 
    if(!Array.isArray(array)   || !isNaN(array)) return 0;
   
    return  Math.min(...array);
  
}

exports.max = function max (array) {
    if(!Array.isArray(array)   || !isNaN(array)) return 0;

  return  Math.max(...array);
}

exports.avg = function avg (array) {
    if(!Array.isArray(array)   || !isNaN(array)) return 0;
    let sum = 0;
    for(let i of array){
        sum += i;
    }

    return sum / array.length;
}



