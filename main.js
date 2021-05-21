function convertFahrToCelsius(n){
    if(typeof n === "boolean"){
     console.log(`[${n}] is not a valid number but a/an ${typeof(n)}.`);
     return `[${n}] is not a valid number but a/an ${typeof(n)}.`;
   }
   else if(Number(n)){
       var value = claculate(n);
       return value;
   }
   else if(typeof n === "string"){
     var number = parseInt(n);
     if(!isNaN(number) || number == 0){
      var value1 = claculate(number);
      return value1;
     }
     else if( isNaN(number)){
       var value = JSON.stringify(n);
     console.log(`'${value} is not a valid number but a/an ${typeof(n)}.'`);
     return `'${value} is not a valid number but a/an ${typeof(n)}.'`
     }
   }
   else if(Array.isArray(n)){
     console.log(`'[${n}] is not a valid number but a/an array.'`);
     return `'[${n}] is not a valid number but a/an array.'`}
   else{
     var value = JSON.stringify(n);
     console.log(`'${value} is not a valid number but a/an ${typeof(n)}.'`);
     return `'${value} is not a valid number but a/an ${typeof(n)}.'`;
   }
 };
 // function calculate
 function calculate(n){
     //1F = 1.8C + 32 (e.g 0deg C = 32deg F)
  var  answer = ((n - 32) / 1.8);
  var answerDec = parseFloat( answer.toFixed(4));
      console.log(`${answerDec}`);
      return `${answerDec}`
 }


 function checkYuGiOh(n){
 
    if(!Number(n)){
      var content = JSON.stringify(n);
      console.log(`invalid parameter: ${content}`);
      return  `invalid parameter: ${content}`;
    }
    else{
      var arr = [];
      for(var i=1; i<= n; i++) {
        if(typeof n === "boolean"){
         var content = JSON.stringify(n);
          console.log(`invalid parameter: "${content}"`);
          return  `invalid parameter: "${content}"`;
       }
      if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
        arr.push("yu-gi-oh");
      }
      else if(i % 2 === 0 && i % 3 === 0 ){
        arr.push("yu-gi");
      }
      else if(i % 2 === 0 &&  i % 5 === 0){
        arr.push("yu-oh");
      }
      else if(i % 3 === 0 && i % 5 === 0){
        arr.push("gi-oh");
      }
      else if(i % 2 === 0 ){
        arr.push("yu");
      }
      else if( i % 3 === 0 ){
        arr.push("gi");
      }
      else if( i % 5 === 0){
        arr.push("oh");
      }
      else {arr.push(i)}
  }
    console.log(arr);
    return arr;
    }
  };