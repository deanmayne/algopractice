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

const playlist = (songs) => {
  const appearDic = {};
  let ans = 0;
  songs.forEach((song) => {
    const mod = song % 60;
    const left = (60 - mod) % 60;
    ans += appearDic[left] ? appearDic[left] : 0;
    appearDic[mod] = appearDic[mod] ? appearDic[mod] + 1 : 1;
  });
  //   console.log(appearDic)
  return ans;
};

// console.log(playlist([4,10,50,90,30]))

function getUmbrellas(requirement, sizes) {
  let count = [];

  sizes.forEach((size) => {
    if (requirement % size === 0) {
      count.push(requirement / size);
    }
  });

  if (count.length === 0) return -1;
  return Math.min(...count);
}

// const solve = (people, umbrellas) => {
//   const biggerUmbrella = Math.max(...umbrellas);
//   const remain = people % biggerUmbrella;
//   const peopleThatFit = Math.floor(people / biggerUmbrella);

//   if (remain >= 1 && umbrellas.length === 1) {
//     return -1;
//   } else {
//     const remainingUmbrellas = umbrellas.filter(
//       (umbrella) => umbrella !== biggerUmbrella
//     );
//     return remain !== 0
//       ? solve(remain, remainingUmbrellas) + peopleThatFit
//       : peopleThatFit;
//   }
// };

// console.log(getUmbrellas(6, [4,1,3]));

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

let arr = [3, -6, 5, -2, 1];
function minStart(arr) {
  let result = 1;
  let unchecked = true;
  
  
  while (unchecked) {
      unchecked = false;
      let acc = result;
    for (let i = 0; i < arr.length; i++) {
        acc += arr[i]

      if (acc < 1) {
        result += 1;
        unchecked = true;
        break
      }
      
      
    }
  }

  return result;
}

console.log(minStart(arr));

let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return inputArr;
};

function caesarCipher(str, shift) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (alpha.includes(str[i])) {
      let newI = (alpha.indexOf(str[i]) + shift) % 26;
      result.push(alpha[newI]);
    } else {
      result.push(str[i]);
    }
  }

  return result.join("");
}

function anagram(word1, word2) {
  let a = word1.split("").sort().join("");
  let b = word2.split("").sort().join("");

  return a === b ? true : false;
}

function funWithAnagrams(text) {
  let unchecked = true;
  while (unchecked) {
    unchecked = false;
    for (let i = 0; i < text.length; i++) {
      for (let j = 0; j < text.length; j++) {
        if (i < j && anagram(text[i], text[j])) {
          text.splice(j, 1);
          unchecked = true;
        }
      }
    }
  }

  return text.sort();
}


function maximumOccurringCharacter(text) {
  let max = 0;
  let result = "";
  let letters = text.split("");
  for (let i = 0; i < letters.length; i++) {
    let temp = letters.filter((letter) => letter === letters[i]).length;
    if (max < temp) {
      max = temp;
      result = letters[i];
    }
  }

  return result;
}

function countPairs(numbers, k) {
  let nums = {};
  numbers.forEach((number) => {
    if (!nums[number]) {
      nums[number] = 0;
    }
  });

  let count = 0;
  Object.keys(nums).forEach((number) => {
    if (nums[Number(number) + Number(k)] !== undefined) {
      count += 1;
    }
  });

  return count;
}

function finalInstances(instances, averageUtil) {
  for (let i = 0; i < averageUtil.length; i++) {
    if (averageUtil[i] < 25 && instances > 1) {
      instances = Math.ceil(instances / 2);
      i += 10;
    }

    if (averageUtil[i] > 60 && instances * 2 < 2 * 10 ** 8) {
      instances *= 2;
      i += 10;
    }
  }
  return instances;
}

function binarySearch(arr, target) {
    if (arr.length === 0) return -1;
    const mid = Math.floor(arr.length / 2);
    if (target < arr[mid]) {
        return binarySearch(arr.slice(0, mid), target);
    } else if (target > arr[mid]) {
        const idx = binarySearch(arr.slice(mid + 1), target);
        return idx === -1 ? -1 : mid + 1 + idx;
    } else {
        return mid;
    }
}

function permutations(array) {
//  array = str.split()
  if (array.length <= 1) {
    return [array];
  }
  const result = [];
  const first = array.pop();
  const prevPerms = permutations(array);

  prevPerms.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      let nextPerm = perm.slice(0, i).concat([first]).concat(perm.slice(i));
      result.push(nextPerm);
    }
  });

  return result;
}

function removeDuplicates(s, k) {
  let noDupes = false;
  let arr = s.split("");
  while (!noDupes) {
    noDupes = true;
    for (let i = 0; i <= arr.length - k; i++) {
      let sub = arr.slice(i, i + k);
      if (sub.join("") === sub[0].repeat(k)) {
        console.log("sub", i, sub);
        arr.splice(i, k);
        // console.log("arr", arr)
        i -= 1;
        noDupes = false;
      }
    }
  }

  return arr.join("");
}