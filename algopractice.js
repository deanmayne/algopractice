// function solution(N) {
//       let direction = N < 0
//       N = Math.abs(N)
//   let string = N.toString();
//   let array = string.split("");
//   let result = [];

// if (direction){
//   result.push(-1 * parseInt(array.concat([5]).join("")));
//   result.push(-1 * parseInt([5].concat(array).join("")));
// } else if (!direction){
//       result.push(parseInt(array.concat([5]).join("")));
//       result.push(parseInt([5].concat(array).join("")));
// }

//   for (let i = 0; i < array.length; i++) {
//     temp = array.slice(0, i).concat([5].concat(array.slice(i, array.length)));

//     if(direction){
//         result.push(-1 * parseInt(temp.join("")));

//     }else if (!direction){
//         console.log("here")
//         result.push(parseInt(temp.join("")));
//   }
// }

//   console.log(result);
//   return Math.max(...result);

// }

// console.log(solution(-999));


function solution (S,K){

    let days = ["Mon", "Tue", "Wed", "Thu","Fri", "Sat", "Sun"]

    S = days.indexOf(S);


    return days[(S + K ) % days.length]

}

console.log(solution("Sat",23))