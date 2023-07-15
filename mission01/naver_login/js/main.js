const inputEmail = document.querySelector('#userEmail');
const inputPw = document.querySelector('#userPassword');
const loginBtn = document.querySelector('.btn-login');

const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

// 이메일 정규 표현식
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

// 비밀번호 정규 표현식 
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}


//이메일 형태 일치 여부
function checkEmail(){
    if(emailReg(inputEmail.value) || inputEmail.value == ''){
      inputEmail.classList.remove('is--invalid');
    }
    else if(!emailReg(inputEmail.value )){
      inputEmail.classList.add('is--invalid');
    }
}
inputEmail.addEventListener('input', checkEmail);


// 비밀번호 형태 일치 여부
function checkPw(){
    if(pwReg(inputPw.value) || inputPw.value == ''){
      inputPw.classList.remove('is--invalid');
    }
    else if(!pwReg(inputPw.value)){
      inputPw.classList.add('is--invalid');
    }
}
inputPw.addEventListener('input', checkPw);


// 4. 로그인 버튼을 클릭시 조건처리
loginBtn.addEventListener('click',(event) => {
  event.preventDefault();
  if(inputEmail.value === user.id && inputPw.value === user.pw){
    window.location.href = 'welcome.html';
  }else{
    alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    inputPw.value=null;
  }
})











//인풋 값 확인하는 방법 : $0.value

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
*/


