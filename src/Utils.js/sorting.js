

/**
 * 
 * @param {array} array 
 * @param {string} sortBy 
 * @param {string} type 
 * @param {number} sortOrder 
 * @returns 
 */

function sorting(array, sortBy, type, sortOrder) {
    if (type === "number") return numbersSort(array, sortBy, sortOrder);
    if (type === "string") return stringsSort(array, sortBy, sortOrder);
    return array;
  }
  
  function numbersSort(array, sortBy, sortOrder) {
    return array.sort((a, b) => {
      a = a[sortBy];
      b = b[sortBy];
      return sortOrder === 1 ? a - b : b - a;
    });
  }
  
  function stringsSort(array, sortBy, sortOrder) {
    return array.sort((a, b) => {
      a = a[sortBy].toUpperCase();
      b = b[sortBy].toUpperCase();
  
      if (a > b) return sortOrder === 1 ? 1 : -1;
      if (a < b) return sortOrder ===1 ? -1 : 1;
      return 0;
    });
  }
  export default sorting;