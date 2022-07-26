var repeatedCharacter = function(s) {
  let L = -1;
  for(let i=0; i<s.length;i++){
      for (let j=i+1; j<s.length;j++){
          if(s[i]==s[j]){
              L=i;
              break
          }
      }
      if(L!=-1){
          break;
      }
  }
  return s[L];
};
const myString = 'abccdeff';
console.log(repeatedCharacter(myString))