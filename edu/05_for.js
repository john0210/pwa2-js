// For 문
// for(let i = 1; i < 5; i++) {
//    if(i >= 3) {
//     break;
//   } 
//   console.log(i);
// }

for(let i = 1; i < 5; i++) {
   if(i === 3) {
    continue;
  } 
  console.log(i);
}

// 다중루프
// let i = 0;
for(let i = 0; i < 3; i++) {
  console.log(`바깥쪽 루프 : ${i}번째`)
 
  for(let z = 0; z < 3; z++) {
    console.log(`바깥쪽 루프 : ${z}번째`)
  }
}

// 구구단 2단
let maxdan = 15;
for(let i = 1; i <= 9; i++) {
  console.log(`${dan} x ${i} = ${dan * i}`);
}

for(let dan = 2; dan <= maxdan; dan++) {
  console.log(`** ${dan}단 **`);

  for(let multiPlier = 1; multiPlier <= maxdan; multiPlier++) {
  console.log(`${dan} x ${multiPlier} = ${dan * multiPlier}`);  
  }
}
