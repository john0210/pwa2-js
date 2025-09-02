// const btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {
//   const input = document.querySelector('#urlinput');
//   const url = input.value; 
//   axios.get(url)
//     .then(response => {
//         response.data.forEach((item, idx) => {
//         const newImg = document.createElement('img');
//         newImg.setAttribute('src', item.download_url);
//         newImg.setAttribute('width', '400');

//         const container = document.querySelector('.image-contents');
//         // container.innerHTML = ""; // 기존 이미지 삭제 
//         container.appendChild(newImg);
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// ------------------- 위에는 성공_지피티 힘 빌려서----

// ------------------- 아래에는 내가 작성한 코드 ----
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  const input = document.querySelector('#urlinput');
  let url = input.value;
  axios.get(url)
  .then(response => {
  response.data.forEach((item, idx) => {
    const newImg = document.createElement('img');
    newImg.setAttribute('src', item.download_url);
    newImg.setAttribute('width', '99%');
    
    const container = document.querySelector('.image-contents'); 
    container.appendChild(newImg);
  });
})
  .catch(err => {
  console.log(err);
});  
});



// axios.get(url)
// .then(response => {
//   response.data.forEach((item, idx) => {
//     const newImg = document.createElement('img');
//     newImg.setAttribute('src', item.download_url);
//     newImg.setAttribute('width', '300px');
    
//     const container = document.querySelector('.container'); 
//     container.appendChild(newImg);
//   });
// })
// .catch(err => {
//   console.log(err);
// });


    



