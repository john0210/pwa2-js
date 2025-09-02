/**
 * 플래그에 따라 로딩을 온(true일 경우)/오프(false일 경우)
 * @param {boolean} fig 
 */
function loadingToggle(fig) {
  const loading = document.querySelector('.loading');
  if(fig) {
    loading.classList.add('loading-on');
  } else {
    loading.classList.remove('loading-on');
  }
}

document.querySelector('.request-box > button').addEventListener('click', async () => {
  loadingToggle(true);
  const loading = document.querySelector('.loading');
  try {  
  loading.classList.add('loading-on');
  const url = document.querySelector('#apiUrl').value;
  const cardBox = document.querySelector('.card-box');
  cardBox.textContent = '';
    const res = await axios.get(url);
    res.data.forEach(item => {
      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.style.backgroundImage = `url(${item.download_url})`;
   
      cardBox.appendChild(newCard);
    });
  } catch (err) {
    console.error(err);
  } finally {
    // loading.classList.remove('loading-on');
    loadingToggle(flase);
  }
});
// 위에는 에이싱크 어웨이트 기법



// document.querySelector('.request-box > button').addEventListener('click', () => {
//   const url = document.querySelector('#apiUrl').value;
//   const cardBox = document.querySelector('.card-box');
//   cardBox.textContent = '';

//   axios.get(url)
//   .then(res => {
//     res.data.forEach(item => {
//       const newCard = document.createElement('div');
//       newCard.classList.add('card');
//       newCard.style.backgroundImage = `url(${item.download_url})`;
   
//       cardBox.appendChild(newCard);
//     });
//   })
//   .catch(err => {
//     console.error(err); //에러만 볼 때
//   });
// });