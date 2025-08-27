// - 아래의 프로그램을 만들어 주세요.
// -'사과 게임' 위에 '장기' 삽입
// -'어메이징브릭'에 베이지 배경색 추가
// - 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정

const UL = document.querySelector('ul');

const newLi = document.createElement('li');
newLi.textContent = '장기';

const newApple = document.querySelector('#apple');

UL.insertBefore(newLi, newApple);

// '어메이징브릭'에 베이지 배경색 추가
const amagingBr = document.querySelector('#ul :nth-last-child(1)');
amagingBr.style.backgroundColor = 'beige';

// 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정

const listLi = document.querySelectorAll('#ul li');
listLi.forEach((item, idx) => {
  if(idx % 2 === 0) {
    item.style.color = 'blue';
  } else {
    item.style.color = 'red';
  }
});

const result = {
  title : '타이틀',
  content : '내용내용',
  img : 'http://www.naver.com/img/posts/dlfkef.png'
}
addCard(result);

function addCard(item) {
const newCard = document.createElement('div');
newCard.classList.add('card');

const newCardImg = document.createElement('div');
newCardImg.classList.add('card-img');

const newCardTitle = document.createElement('p');
newCardTitle.textContent = 'item.title';

const newCardContent = document.createElement('p');
newCardContent.textContent = 'item.content';

newCard.appendChild(newCardImg);
newCard.appendChild(newCardTitle);
newCard.appendChild(newCardContent);

document.body.appendChild(newCard);
}


// 카드 구조 만들기
// const newCard = document.createElement('div');
// newCard.classList.add('card');

// const newCardImg = document.createElement('div');
// newCardImg.classList.add('card-img');

// const newCardTitle = document.createElement('p');
// newCardTitle.textContent = '카드 타이틀';

// const newCardTitle = document.createElement('p');
// newCardContent.textContent = '내용내용내용내용내용';

// newCard.appendChild(newCardImg);
// newCard.appendChild(newCardTitle);
// newCard.appendChild(newCardContent);

// document.body.appendChild(newCard);