// 과제 : 각 회원의 rank가 코드 형식으로 저장되어 있습니다.
// 이 코드는 각각 아래와 같은 의미를 가집니다.
// 1 = 관리자, 2 = 팀장, 3 = 주임, 4 = 사원
// 코드로 되어있는 랭크를 한글로 바꿔주세요.
// 프로젝트 할 때 데이터 타입이 이런 방식으로 제공 됨.

const result = [
  {
    userId: 1,
    email: 'admin1@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'jhon',
    rank: 1,
  },
  {
    userId: 2,
    email: 'admin2@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'suzan',
    rank: 2,
  },
  {
    userId: 3,
    email: 'admin3@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'ahoi',
    rank: 3,
  },
  {
    userId: 4,
    email: 'admin4@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'yoho',
    rank: 2,
  },
];

// const re_rank1 = result[0].rank;
// const re_rank2 = result[1].rank;
// const re_rank3 = result[2].rank;
// const re_rank4 = result[3].rank;

// const rank1 = result[0].pop();
// const rank2 = result[1].pop();
// const rank3 = result[2].pop();
// const rank4 = result[3].pop();

// const re_rank1 = rank1.concat('rank: 관리자');
// const re_rank2 = rank2.concat('rank: 팀장');
// const re_rank3 = rank3.concat('rank: 주임');
// const re_rank4 = rank4.concat('rank: 팀장');

// console.log(result);

// (수정) -> 맵을 써야 함

const resultMap = result.map(item => {
  let krRank = '';
  if(item.rank === 1) {
    krRank = '관리자';
  } else if(item.rank === 2) {
    krRank = '팀장';
  } else if(item.rank === 3) {
    krRank = '주임';
  } else {
    krRank = '사원';
  }  
  
  item.rank = krRank;
  return item;
});

console.log(resultMap);

// 위에는 원본까지 바뀌는 경우임