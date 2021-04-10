function steamrollArray(arr) {
    const flat = [].concat(...arr);
    console.log('flat -> ', flat)
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
  
  
steamrollArray([1, [2], [3, [[4]]]])