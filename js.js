const $text = document.querySelector(".intro-text");

// 글자 모음 - 개행문자(\n)로 줄바꿈
const letters = [
    "PHP 개발자",
    "백엔드 개발자", 
    "노력하는 개발자"
];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 줄바꿈을 위한 <br> 치환
const changeLineBreak = (letter) => {
    return letter.map(text => text === "\n" ? "<br>" : text);
}

// 타이핑 효과
const typing = async () => {  
  // 기존코드에서 개행치환코드 추가
    const letter = changeLineBreak(letters[i].split(""));
    while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift(); 
}
await wait(2000);
remove();
}
const remove = async () => {
    const letter = changeLineBreak(letters[i].split(""));
    while (letter.length) {
    await wait(speed);
    letter.pop();
    $text.innerHTML = letter.join(""); 
}

    i = !letters[i+1] ? 0 : i + 1;
    typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);