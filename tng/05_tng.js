// let i = '*';

// for(let i=1; i<=5; i++) {
//   if(ture) {
//     console.log(i);
//   } for(let j=1; j<=5; j++) {
//     console.log(j);
//   }
// }

// for(let i = 0; i < 5; i++) {
//   console.log('*****');
// }

// let star = '*';
// let makedstar = '';

// for(star = 1; star <= 5; star++) {
//   console.log(`${star}`);
//   for(makedstar = 1; makedstar <= 5; makedstar++) {
//     console.log(`${makedstar} += ${star}`);
//   }
//   if(true) {
//     console.log(makedstar);
//   }
// }
// let star = '*';

// for(let i = 0; i < 5; i++) {
//   let makedStar = '';

//   for(let z = 0; z < 5; z++) {
//     makedStar += star;
//   }
//   console.log(`${makedStar}`);
// }

// let star = '*';
// let makedstar = star += star;

// // for(let i = 0; i < 5; i++) {
// //    for(let z = 0; z < 5; z++) {
// //    star += star;
// // }
// //    console.log(`${star}`);
// // }
// for(let i = 1; i < 6; i++) {
//   let makedstar = ''; 
//   for(let z = 1; z < 6; z++) {
//   } console.log(`${makedstar}`);
// }
// let makedStar = '';
// for(let lineCnt = 0; lineCnt < 5; linecnt++) {
//   makedStar += '*';
//   console.log(makedStar);
// }

// for(let lineCnt = 0; lineCnt < 5; linecnt++) {
//   let makedStar = '';
//   for(let starCnt = 0; starCnt <= lineCnt; starCnt++) {
//     makedStar += '*';
//   }
//   console.log(makedStar);
// }
let makedStar = '';

for(let lineCnt = 5; lineCnt > 0; lineCnt--) {
  makedStar += '*';
  let makedSpace = '';
  for(let spaceCnt = 1; spaceCnt < lineCnt; spaceCnt++) {
    makedSpace += ' '; 
  }
  console.log(makedSpace + makedStar);
}