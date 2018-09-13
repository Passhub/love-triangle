/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = 
function getLoveTrianglesCount(preferences) {
  let count = 0;
  for(let j = 0; j < preferences.length; j++){
      let a,b,c;
      let ac,bc,cc;
      let s1;
      a = j;
      b = preferences[a];
      c = preferences[b - 1];
      ac = b;
      bc = c;
      cc = preferences[c - 1];
          if(cc == a + 1 && ac != cc){
              preferences[a] = 0;
              count ++;
          }

  }
return count;
}    
