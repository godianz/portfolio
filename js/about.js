let content = "해내겠습니다. 잘 부탁드립니다!!!!";
let typing = document.querySelector(".title");
let i = 0;

function typingText(){
  if(i < content.length) {
    let txt = content.charAt(i);
    typing.innerHTML += txt == "\n" ? "<br/>" : txt;
    i++;
  }
}
setInterval(typingText,70);