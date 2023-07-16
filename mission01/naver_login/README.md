p# 네이버 로그인 페이지 구현


---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

<br>

# 결과

![naverlogin_result](https://github.com/chowonn/home-work/assets/70478015/075bc3ab-23a5-4cbe-a0dd-da9662080216)

- 사용자가 이메일, 비밀번호를 input에 입력하고 텍스트를 수정할 때마다 에러 메시지가 띄워지거나, 지워지도록 addEventListener input을 발생시킵니다. <br>
( 이메일 / 비밀번호의 정규식 형태에 일치하거나, input에서 텍스트가 사라질 경우 => remove 'is--invalid'  <br>
 이메일 / 비밀번호의 정규식 형태에 일치하지 않을 경우 => add 'is--invalid' )  
 <br>
 
- 로그인 버튼 클릭 시 inputEmail.value === user.id && inputPw.value === user.pw 와 같이 두 값이 일치할 경우 welcome.html 페이지로 이동합니다. <br>
 (만일 두 값이 일치하지 않을 경우, alert 창을 띄워주고 inputPw.value=null 로 비밀번호 인풋 값을 초기화시킵니다. )



