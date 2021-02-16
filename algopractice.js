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

function solution(S, K) {
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  S = days.indexOf(S);

  return days[(S + K) % days.length];
}

// console.log(solution("Sat", 23));

function adjacentDuplicates(s, k) {
  let unchecked = true;
  while (unchecked) {
    unchecked = false;

    s.split("").forEach((letter) => {
      if (s.match(letter.repeat(k))) {
        s = s.replace(letter.repeat(k), "");
        unchecked = true;
      }
    });
  }

  return s;
}

// console.log(adjacentDuplicates("pbbcggttciiippooaais", 2));

// function playlist(songs) {
//   let count = 0;
//   for (let i = 0; i < songs.length; i++) {
//     for (let j = 0; j < songs.length; j++) {
//       if ((songs[i] + songs[j]) % 60 === 0 && i < j) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// }

// console.log(playlist([4,10,50,90,30]))



function getUmbrellas(requirement, sizes) {

    let count = [];

    sizes.forEach((size)=>{
        if (requirement % size === 0 ){
            count.push(requirement / size);
        }

    })

    if (count.length === 0 ) return - 1
    return Math.min(...count)


}



console.log(getUmbrellas(6, [4,1,3]));
