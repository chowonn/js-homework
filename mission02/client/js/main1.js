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


const navigation = getNode('ul'); 
const visualImage = getNode('.visual img');
const nickName = getNode('.nickName');
const posterColor = getNode('body');




function handleSlider(e){
  e.preventDefault();
  const target = e.target.closest('li');
  const btn = e.target.closest('button'); 
  if(!target || !btn ) return;

  
 const list = [...navigation.children];
 console.log(list);
 const index = attr(target,'data-index'); 
 

 list.forEach(li => removeClass(li,'is-active'));

  addClass(target, 'is-active'); 
 
  const colorA = data[index-1].color[0];
  const colorB = data[index-1].color[1];

  attr(visualImage,'src',`./assets/${data[index -1].name}.jpeg`);
  attr(visualImage,'alt',data[index -1].alt);
  nickName.textContent = `${data[index-1].name}`; 
  posterColor.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;


}

navigation.addEventListener('click',handleSlider);