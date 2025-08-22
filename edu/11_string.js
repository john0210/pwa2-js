// String 객체

let str = '문자열입니다.';

// length : 문자열의 길이를 반환
console.log(str.length);

console.log(str[1]);

// charAt(idx) : idx의 요소의 값을 반환
console.log(str.charAt(3));

// indexOF(searchStr, idx) : 해당 문자열에서 searchStr을 찾아 최초의 인덱스를 반환
// 찾지 못하면 -1 반환
// idx는 생략 가능, start 지점 지정인데 생략 가능하다는 의미

str = '문자열입니다. 문자열입니다.';
console.log(str.indexOf('열'));
console.log(str.indexOf('열', 3));
console.log(str.indexOf('입니다'));
console.log(str.indexOf('입니당'));
console.log(str.includes('입니당'));
// 존재여부 체크할 때는 위의 2개 사용.

// replace(pattern, replacement) : pattern을 찾아서 첫번째 문자열을 replacement 치환한 문자열을 반환
str = '문자열입니다. 문자열입니다.';
console.log(str.replace('문자열', '왕조현'));
console.log(str.replace('문자열', ''));

// replaceAll(pattern, replacement) : pattern을 찾아서 모든 문자열을 replacement 치환한 문자열을 반환
str = '문자열입니다. 문자열입니다.';
console.log(str.replaceAll('문자열', '장국영'));
console.log(str.replaceAll('문자열', ''));

// substring(startIdx, endIdx) : startIdx부터 endIdx까지 자른 문자열을 반환
str = '문자열입니다. 문자열입니다.';
console.log(str.substring(3, 5));

// split(separator, limit) : 문자열에서 separator 기준으로 각 문자열을 잘라 배열 요소로 담은 배열을 반환
str = '왕조현,장국영,성룡,이연걸,견자단';
// let arr = str.split(',', 3);
let arr = str.split(',');
console.log(arr);

// trim() : 문자열의 시작과 끝에 있는 공백을 제거한 문자열을 반환
str = '     하 하   ';
console.log(str.trim());

// toUpperCase(), toLowerCase() : 영어 대/소문자로 변환해서 반환
str = 'Superman';
console.log(str.toUpperCase());
console.log(str.toLowerCase());

str = '장국영입니다. 왕조현입니다. 장국영입니다. 왕조현입니다.'
console.log(str.replaceAll('장국영', '문자열').replaceAll('왕조현', '문자열'));

// 붙여서 쓰는 방법을 체이닝 기법이라고 함(현업에서).


