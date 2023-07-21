

/* 
1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
*/


// 배경색 변경 함수
function setBgColor(index){
  const colorA = data[index-1].color[0];
  const colorB = data[index-1].color[1];
  const posterColor = getNode('body');
  posterColor.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

// 이름 변경 함수 
function setNameText(index){
  const nickName = getNode('.nickName');
  nickName.textContent = `${data[index-1].name}`; 
}

// 이미지 변경 함수
function setImage(index){
const visualImage = getNode('.visual img');
attr(visualImage,'src',`./assets/${data[index -1].name}.jpeg`);
attr(visualImage,'alt',data[index -1].alt);
}

// 오디오 실행 함수
function setAudio(index){
const audioSrc = `./assets/audio/${data[index -1].name.toLowerCase()}.m4a`;
console.log(audioSrc);


audioPlay = new AudioPlayer(audioSrc);
audioPlay.play();
}


// 이벤트 핸들러 함수
function handleSlider(e){
e.preventDefault();
const target = e.target.closest('li');
if(!target ) return;

const nav = getNode('ul');
const list = [...nav.children];

console.log(list);
console.log(navigation);
const index = attr(target,'data-index'); 



list.forEach(li => removeClass(li,'is-active'));
addClass(target, 'is-active'); 


setBgColor(index);
setNameText(index);
setImage(index);
setAudio(index);
  
}


function getElement(){
const navigation = getNode('ul'); 
navigation.addEventListener('click',handleSlider);
}

getElement();



