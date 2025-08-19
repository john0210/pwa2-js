// let rank = 80;

// if(rank === 100) {
//   console.log('A+');
// } else if(rank >= 90) {
//   console.log('A');
// } else if(rank >= 80) {
//   console.log('B');
// } else if(rank >= 70) {
//   console.log('C');
// } else if(rank >= 60) {
//   console.log('D');
// } else {
//   console.log('F');
// }


// let score = rank;

// console.log('당신의 점수는' + score + '점입니다.' + '<' + grade + '>');

let score = 100;
let grade = 'F';

if(score > 100 || score < 0) {
  console.log('잘못된 값입니다.');
} else { if(score === 100) {
  grade = 'A+';
} else if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else if (score >= 60) {
  grade = 'D';
} else {
  grade = 'F';
}

//  console.log('당신의 점수는' + score + '점입니다' + '<' + grade + '>');
 console.log(`당신의 점수는 ${score}점 입니다. <${grade}>`);
}
// ` ` 벡틱 기호 주의