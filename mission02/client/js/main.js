/* 
1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

    1. `setBgColor` 함수
    2. `setImage` 함수
    3. `setNameText` 함수
*/

function setBgColor(index){
    const colorA = data[index-1].color[0];
    const colorB = data[index-1].color[1];
    const posterColor = getNode('body');
    posterColor.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
  }
  
  function setNameText(index){
    const nickName = getNode('.nickName');
    nickName.textContent = `${data[index-1].name}`; 
}

function setImage(index){
  const visualImage = getNode('.visual img');
  attr(visualImage,'src',`./assets/${data[index -1].name}.jpeg`);
  attr(visualImage,'alt',data[index -1].alt);
}
  

function setAudio(index){
  const audioSrc = `./assets/audio/${data[index -1].name.toLowerCase()}.m4a`;
  console.log(audioSrc);


  audioPlay = new AudioPlayer(audioSrc);
  audioPlay.play();
}


const navigation = getNode('ul'); 


function handleSlider(e){
  e.preventDefault();
  const target = e.target.closest('li');
  if(!target ) return;

  
 const list = [...navigation.children];
 console.log(list);
 const index = attr(target,'data-index'); 

 

 list.forEach(li => removeClass(li,'is-active'));
  addClass(target, 'is-active'); 
 

  setBgColor(index);
  setNameText(index);
  setImage(index);
  setAudio(index);

}



navigation.addEventListener('click',handleSlider);














