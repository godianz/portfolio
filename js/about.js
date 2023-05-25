let content = "해내겠습니다. 잘 부탁드립니다!!!!";
let typing = document.querySelector(".title");
let i = 0;

function typingText(){
  if(i < content.length) {
    let txt = content.charAt(i);
    typing.innerHTML += txt;
    i++;
  }
}
setInterval(typingText,70);
// setInterval: 인터페이스에서 제공되는 메서드는 각 호출 사이에 고정 시간 지연으로 함수를 반복적으로 호출하거나 코트 스니펫을 실행합니다. 
// setInterval(code, delay)
//코드 스니펫: 재사용 가능한 소스 코드, 기계어, 텍스의 작은 부분