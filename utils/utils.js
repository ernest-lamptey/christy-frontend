export function addOrRemoveOrder (arr, elem) {
    const index = arr.indexOf(elem);
    if (index !== -1) {
      arr.splice(index, 1);
    } else {
      arr.push(elem);
    }
    return arr;
}

export function capitalize (text) {
  return text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
}